[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceUpdateMinStockToMaintainRequest

# Class: FamiliesServiceUpdateMinStockToMaintainRequest

Request message for updating the minimum inventory threshold (safety stock) of an existing family.
This triggers operational rules within the inventory system to automate restock alerts when physical stock dips below this value.

**`Generated`**

from message Scailo.FamiliesServiceUpdateMinStockToMaintainRequest

## Hierarchy

- `Message`\<[`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md)\>

  ↳ **`FamiliesServiceUpdateMinStockToMaintainRequest`**

## Table of contents

### Constructors

- [constructor](FamiliesServiceUpdateMinStockToMaintainRequest.md#constructor)

### Properties

- [minStockToMaintain](FamiliesServiceUpdateMinStockToMaintainRequest.md#minstocktomaintain)
- [userComment](FamiliesServiceUpdateMinStockToMaintainRequest.md#usercomment)
- [uuid](FamiliesServiceUpdateMinStockToMaintainRequest.md#uuid)
- [fields](FamiliesServiceUpdateMinStockToMaintainRequest.md#fields)
- [runtime](FamiliesServiceUpdateMinStockToMaintainRequest.md#runtime)
- [typeName](FamiliesServiceUpdateMinStockToMaintainRequest.md#typename)

### Methods

- [clone](FamiliesServiceUpdateMinStockToMaintainRequest.md#clone)
- [equals](FamiliesServiceUpdateMinStockToMaintainRequest.md#equals)
- [fromBinary](FamiliesServiceUpdateMinStockToMaintainRequest.md#frombinary)
- [fromJson](FamiliesServiceUpdateMinStockToMaintainRequest.md#fromjson)
- [fromJsonString](FamiliesServiceUpdateMinStockToMaintainRequest.md#fromjsonstring)
- [getType](FamiliesServiceUpdateMinStockToMaintainRequest.md#gettype)
- [toBinary](FamiliesServiceUpdateMinStockToMaintainRequest.md#tobinary)
- [toJSON](FamiliesServiceUpdateMinStockToMaintainRequest.md#tojson)
- [toJson](FamiliesServiceUpdateMinStockToMaintainRequest.md#tojson-1)
- [toJsonString](FamiliesServiceUpdateMinStockToMaintainRequest.md#tojsonstring)
- [equals](FamiliesServiceUpdateMinStockToMaintainRequest.md#equals-1)
- [fromBinary](FamiliesServiceUpdateMinStockToMaintainRequest.md#frombinary-1)
- [fromJson](FamiliesServiceUpdateMinStockToMaintainRequest.md#fromjson-1)
- [fromJsonString](FamiliesServiceUpdateMinStockToMaintainRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesServiceUpdateMinStockToMaintainRequest**(`data?`): [`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md)\> |

#### Returns

[`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md)

#### Overrides

Message\&lt;FamiliesServiceUpdateMinStockToMaintainRequest\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:4631](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L4631)

## Properties

### minStockToMaintain

• **minStockToMaintain**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated minimum inventory threshold required to be maintained for items within this family.

**`Example`**

```ts
1000
```

**`Regex`**

^[0-9]+$

**`Format`**

Unsigned 64-bit integer greater than or equal to 0.

**`Generated`**

from field: uint64 min_stock_to_maintain = 27;

#### Defined in

[src/families.scailo_pb.ts:4629](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L4629)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 1;

#### Defined in

[src/families.scailo_pb.ts:4597](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L4597)

___

### uuid

• **uuid**: `string` = `""`

**`Mandatory`**

**`Description`**

The globally unique identifier (UUID) of the target family.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

Valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string uuid = 10;

#### Defined in

[src/families.scailo_pb.ts:4613](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L4613)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:4638](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L4638)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:4636](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L4636)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceUpdateMinStockToMaintainRequest"``

#### Defined in

[src/families.scailo_pb.ts:4637](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L4637)

## Methods

### clone

▸ **clone**(): [`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md)

Create a deep copy.

#### Returns

[`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md) \| `PlainMessage`\<[`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md) \| `PlainMessage`\<[`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md)\> |
| `b` | `undefined` \| [`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md) \| `PlainMessage`\<[`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:4656](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L4656)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md)

#### Defined in

[src/families.scailo_pb.ts:4644](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L4644)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md)

#### Defined in

[src/families.scailo_pb.ts:4648](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L4648)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceUpdateMinStockToMaintainRequest`](FamiliesServiceUpdateMinStockToMaintainRequest.md)

#### Defined in

[src/families.scailo_pb.ts:4652](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L4652)
