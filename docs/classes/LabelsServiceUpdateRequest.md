[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / LabelsServiceUpdateRequest

# Class: LabelsServiceUpdateRequest

Describes the data structure to perform the update (draft/revision) operation on a label

**`Generated`**

from message Scailo.LabelsServiceUpdateRequest

## Hierarchy

- `Message`\<[`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md)\>

  ↳ **`LabelsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](LabelsServiceUpdateRequest.md#constructor)

### Properties

- [description](LabelsServiceUpdateRequest.md#description)
- [id](LabelsServiceUpdateRequest.md#id)
- [name](LabelsServiceUpdateRequest.md#name)
- [userComment](LabelsServiceUpdateRequest.md#usercomment)
- [fields](LabelsServiceUpdateRequest.md#fields)
- [runtime](LabelsServiceUpdateRequest.md#runtime)
- [typeName](LabelsServiceUpdateRequest.md#typename)

### Methods

- [clone](LabelsServiceUpdateRequest.md#clone)
- [equals](LabelsServiceUpdateRequest.md#equals)
- [fromBinary](LabelsServiceUpdateRequest.md#frombinary)
- [fromJson](LabelsServiceUpdateRequest.md#fromjson)
- [fromJsonString](LabelsServiceUpdateRequest.md#fromjsonstring)
- [getType](LabelsServiceUpdateRequest.md#gettype)
- [toBinary](LabelsServiceUpdateRequest.md#tobinary)
- [toJSON](LabelsServiceUpdateRequest.md#tojson)
- [toJson](LabelsServiceUpdateRequest.md#tojson-1)
- [toJsonString](LabelsServiceUpdateRequest.md#tojsonstring)
- [equals](LabelsServiceUpdateRequest.md#equals-1)
- [fromBinary](LabelsServiceUpdateRequest.md#frombinary-1)
- [fromJson](LabelsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](LabelsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LabelsServiceUpdateRequest**(`data?`): [`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md)\> |

#### Returns

[`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md)

#### Overrides

Message\&lt;LabelsServiceUpdateRequest\&gt;.constructor

#### Defined in

src/labels.scailo_pb.ts:328

## Properties

### description

• **description**: `string` = `""`

A short description of the label

**`Generated`**

from field: string description = 11;

#### Defined in

src/labels.scailo_pb.ts:326

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the label that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/labels.scailo_pb.ts:312

___

### name

• **name**: `string` = `""`

The name of the label

**`Generated`**

from field: string name = 10;

#### Defined in

src/labels.scailo_pb.ts:319

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/labels.scailo_pb.ts:305

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/labels.scailo_pb.ts:335

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/labels.scailo_pb.ts:333

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LabelsServiceUpdateRequest"``

#### Defined in

src/labels.scailo_pb.ts:334

## Methods

### clone

▸ **clone**(): [`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md) \| `PlainMessage`\<[`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md) \| `PlainMessage`\<[`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md) \| `PlainMessage`\<[`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/labels.scailo_pb.ts:354

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md)

#### Defined in

src/labels.scailo_pb.ts:342

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md)

#### Defined in

src/labels.scailo_pb.ts:346

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LabelsServiceUpdateRequest`](LabelsServiceUpdateRequest.md)

#### Defined in

src/labels.scailo_pb.ts:350
