[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UnitsOfMaterialsServiceUpdateRequest

# Class: UnitsOfMaterialsServiceUpdateRequest

Request message for updating an existing UnitOfMaterial record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the name, symbol, mantissa name, exponent name, and description
of an established UnitOfMaterial.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.UnitsOfMaterialsServiceUpdateRequest

## Hierarchy

- `Message`\<[`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md)\>

  ↳ **`UnitsOfMaterialsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](UnitsOfMaterialsServiceUpdateRequest.md#constructor)

### Properties

- [description](UnitsOfMaterialsServiceUpdateRequest.md#description)
- [id](UnitsOfMaterialsServiceUpdateRequest.md#id)
- [name](UnitsOfMaterialsServiceUpdateRequest.md#name)
- [notifyUsers](UnitsOfMaterialsServiceUpdateRequest.md#notifyusers)
- [symbol](UnitsOfMaterialsServiceUpdateRequest.md#symbol)
- [userComment](UnitsOfMaterialsServiceUpdateRequest.md#usercomment)
- [fields](UnitsOfMaterialsServiceUpdateRequest.md#fields)
- [runtime](UnitsOfMaterialsServiceUpdateRequest.md#runtime)
- [typeName](UnitsOfMaterialsServiceUpdateRequest.md#typename)

### Methods

- [clone](UnitsOfMaterialsServiceUpdateRequest.md#clone)
- [equals](UnitsOfMaterialsServiceUpdateRequest.md#equals)
- [fromBinary](UnitsOfMaterialsServiceUpdateRequest.md#frombinary)
- [fromJson](UnitsOfMaterialsServiceUpdateRequest.md#fromjson)
- [fromJsonString](UnitsOfMaterialsServiceUpdateRequest.md#fromjsonstring)
- [getType](UnitsOfMaterialsServiceUpdateRequest.md#gettype)
- [toBinary](UnitsOfMaterialsServiceUpdateRequest.md#tobinary)
- [toJSON](UnitsOfMaterialsServiceUpdateRequest.md#tojson)
- [toJson](UnitsOfMaterialsServiceUpdateRequest.md#tojson-1)
- [toJsonString](UnitsOfMaterialsServiceUpdateRequest.md#tojsonstring)
- [equals](UnitsOfMaterialsServiceUpdateRequest.md#equals-1)
- [fromBinary](UnitsOfMaterialsServiceUpdateRequest.md#frombinary-1)
- [fromJson](UnitsOfMaterialsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](UnitsOfMaterialsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new UnitsOfMaterialsServiceUpdateRequest**(`data?`): [`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md)\> |

#### Returns

[`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md)

#### Overrides

Message\&lt;UnitsOfMaterialsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/units_of_materials.scailo_pb.ts:314](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/units_of_materials.scailo_pb.ts#L314)

## Properties

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

Contextual description or clarifying details outlining the operational bounds, conversions, or standard applications of this unit.

**`Example`**

```ts
"Standard SI unit for mass, utilized across all raw bulk compound inventory tables."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string description = 12;

#### Defined in

[src/units_of_materials.scailo_pb.ts:312](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/units_of_materials.scailo_pb.ts#L312)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/units_of_materials.scailo_pb.ts:252](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/units_of_materials.scailo_pb.ts#L252)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or canonical name of the unit of material.

**`Example`**

```ts
"Kilogram"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 10;

#### Defined in

[src/units_of_materials.scailo_pb.ts:280](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/units_of_materials.scailo_pb.ts#L280)

___

### notifyUsers

• `Optional` **notifyUsers**: `boolean`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool notify_users = 3;

#### Defined in

[src/units_of_materials.scailo_pb.ts:264](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/units_of_materials.scailo_pb.ts#L264)

___

### symbol

• `Optional` **symbol**: `string`

**`Optional`**

**`Description`**

The unique shorthand symbol, abbreviation, or metric token by which the unit of material is structurally classified.

**`Example`**

```ts
"kg"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string symbol = 11;

#### Defined in

[src/units_of_materials.scailo_pb.ts:296](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/units_of_materials.scailo_pb.ts#L296)

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

[src/units_of_materials.scailo_pb.ts:236](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/units_of_materials.scailo_pb.ts#L236)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/units_of_materials.scailo_pb.ts:321](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/units_of_materials.scailo_pb.ts#L321)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/units_of_materials.scailo_pb.ts:319](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/units_of_materials.scailo_pb.ts#L319)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UnitsOfMaterialsServiceUpdateRequest"``

#### Defined in

[src/units_of_materials.scailo_pb.ts:320](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/units_of_materials.scailo_pb.ts#L320)

## Methods

### clone

▸ **clone**(): [`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md) \| `PlainMessage`\<[`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md) \| `PlainMessage`\<[`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md) \| `PlainMessage`\<[`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/units_of_materials.scailo_pb.ts:342](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/units_of_materials.scailo_pb.ts#L342)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md)

#### Defined in

[src/units_of_materials.scailo_pb.ts:330](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/units_of_materials.scailo_pb.ts#L330)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md)

#### Defined in

[src/units_of_materials.scailo_pb.ts:334](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/units_of_materials.scailo_pb.ts#L334)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UnitsOfMaterialsServiceUpdateRequest`](UnitsOfMaterialsServiceUpdateRequest.md)

#### Defined in

[src/units_of_materials.scailo_pb.ts:338](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/units_of_materials.scailo_pb.ts#L338)
