[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceUpdateMinStockToMaintainRequest

# Class: FamiliesServiceUpdateMinStockToMaintainRequest

Describes the parameters necessary to update a family's min stock to maintain

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

src/families.scailo_pb.ts:2753

## Properties

### minStockToMaintain

• **minStockToMaintain**: `bigint` = `protoInt64.zero`

Stores the minimum stock to maintain

**`Generated`**

from field: uint64 min_stock_to_maintain = 27;

#### Defined in

src/families.scailo_pb.ts:2751

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/families.scailo_pb.ts:2737

___

### uuid

• **uuid**: `string` = `""`

The UUID of the family

**`Generated`**

from field: string uuid = 10;

#### Defined in

src/families.scailo_pb.ts:2744

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/families.scailo_pb.ts:2760

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/families.scailo_pb.ts:2758

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceUpdateMinStockToMaintainRequest"``

#### Defined in

src/families.scailo_pb.ts:2759

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

src/families.scailo_pb.ts:2778

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

src/families.scailo_pb.ts:2766

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

src/families.scailo_pb.ts:2770

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

src/families.scailo_pb.ts:2774
