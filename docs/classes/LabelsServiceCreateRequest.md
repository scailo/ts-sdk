[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / LabelsServiceCreateRequest

# Class: LabelsServiceCreateRequest

Describes the necessary data structure during creation of a label

**`Generated`**

from message Scailo.LabelsServiceCreateRequest

## Hierarchy

- `Message`\<[`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md)\>

  ↳ **`LabelsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](LabelsServiceCreateRequest.md#constructor)

### Properties

- [description](LabelsServiceCreateRequest.md#description)
- [entityUuid](LabelsServiceCreateRequest.md#entityuuid)
- [name](LabelsServiceCreateRequest.md#name)
- [userComment](LabelsServiceCreateRequest.md#usercomment)
- [fields](LabelsServiceCreateRequest.md#fields)
- [runtime](LabelsServiceCreateRequest.md#runtime)
- [typeName](LabelsServiceCreateRequest.md#typename)

### Methods

- [clone](LabelsServiceCreateRequest.md#clone)
- [equals](LabelsServiceCreateRequest.md#equals)
- [fromBinary](LabelsServiceCreateRequest.md#frombinary)
- [fromJson](LabelsServiceCreateRequest.md#fromjson)
- [fromJsonString](LabelsServiceCreateRequest.md#fromjsonstring)
- [getType](LabelsServiceCreateRequest.md#gettype)
- [toBinary](LabelsServiceCreateRequest.md#tobinary)
- [toJSON](LabelsServiceCreateRequest.md#tojson)
- [toJson](LabelsServiceCreateRequest.md#tojson-1)
- [toJsonString](LabelsServiceCreateRequest.md#tojsonstring)
- [equals](LabelsServiceCreateRequest.md#equals-1)
- [fromBinary](LabelsServiceCreateRequest.md#frombinary-1)
- [fromJson](LabelsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](LabelsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LabelsServiceCreateRequest**(`data?`): [`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md)\> |

#### Returns

[`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md)

#### Overrides

Message\&lt;LabelsServiceCreateRequest\&gt;.constructor

#### Defined in

src/labels.scailo_pb.ts:262

## Properties

### description

• **description**: `string` = `""`

A short description of the label

**`Generated`**

from field: string description = 11;

#### Defined in

src/labels.scailo_pb.ts:260

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/labels.scailo_pb.ts:239

___

### name

• **name**: `string` = `""`

The name of the label

**`Generated`**

from field: string name = 10;

#### Defined in

src/labels.scailo_pb.ts:253

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/labels.scailo_pb.ts:246

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/labels.scailo_pb.ts:269

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/labels.scailo_pb.ts:267

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LabelsServiceCreateRequest"``

#### Defined in

src/labels.scailo_pb.ts:268

## Methods

### clone

▸ **clone**(): [`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md) \| `PlainMessage`\<[`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md) \| `PlainMessage`\<[`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md) \| `PlainMessage`\<[`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/labels.scailo_pb.ts:288

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md)

#### Defined in

src/labels.scailo_pb.ts:276

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md)

#### Defined in

src/labels.scailo_pb.ts:280

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LabelsServiceCreateRequest`](LabelsServiceCreateRequest.md)

#### Defined in

src/labels.scailo_pb.ts:284
