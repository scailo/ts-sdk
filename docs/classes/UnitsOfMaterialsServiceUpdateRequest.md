[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UnitsOfMaterialsServiceUpdateRequest

# Class: UnitsOfMaterialsServiceUpdateRequest

Describes the parameters necessary to update a record

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

src/units_of_materials.scailo_pb.ts:208

## Properties

### description

• **description**: `string` = `""`

The description of the unit of material

**`Generated`**

from field: string description = 12;

#### Defined in

src/units_of_materials.scailo_pb.ts:206

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/units_of_materials.scailo_pb.ts:178

___

### name

• **name**: `string` = `""`

The name of the unit of material

**`Generated`**

from field: string name = 10;

#### Defined in

src/units_of_materials.scailo_pb.ts:192

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that denotes if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/units_of_materials.scailo_pb.ts:185

___

### symbol

• **symbol**: `string` = `""`

The unique symbol by which the unit of material is classified

**`Generated`**

from field: string symbol = 11;

#### Defined in

src/units_of_materials.scailo_pb.ts:199

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/units_of_materials.scailo_pb.ts:171

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/units_of_materials.scailo_pb.ts:215

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/units_of_materials.scailo_pb.ts:213

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UnitsOfMaterialsServiceUpdateRequest"``

#### Defined in

src/units_of_materials.scailo_pb.ts:214

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

src/units_of_materials.scailo_pb.ts:236

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

src/units_of_materials.scailo_pb.ts:224

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

src/units_of_materials.scailo_pb.ts:228

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

src/units_of_materials.scailo_pb.ts:232
