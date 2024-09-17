[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesTagsList

# Class: ActivitiesTagsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.ActivitiesTagsList

## Hierarchy

- `Message`\<[`ActivitiesTagsList`](ActivitiesTagsList.md)\>

  ↳ **`ActivitiesTagsList`**

## Table of contents

### Constructors

- [constructor](ActivitiesTagsList.md#constructor)

### Properties

- [list](ActivitiesTagsList.md#list)
- [fields](ActivitiesTagsList.md#fields)
- [runtime](ActivitiesTagsList.md#runtime)
- [typeName](ActivitiesTagsList.md#typename)

### Methods

- [clone](ActivitiesTagsList.md#clone)
- [equals](ActivitiesTagsList.md#equals)
- [fromBinary](ActivitiesTagsList.md#frombinary)
- [fromJson](ActivitiesTagsList.md#fromjson)
- [fromJsonString](ActivitiesTagsList.md#fromjsonstring)
- [getType](ActivitiesTagsList.md#gettype)
- [toBinary](ActivitiesTagsList.md#tobinary)
- [toJSON](ActivitiesTagsList.md#tojson)
- [toJson](ActivitiesTagsList.md#tojson-1)
- [toJsonString](ActivitiesTagsList.md#tojsonstring)
- [equals](ActivitiesTagsList.md#equals-1)
- [fromBinary](ActivitiesTagsList.md#frombinary-1)
- [fromJson](ActivitiesTagsList.md#fromjson-1)
- [fromJsonString](ActivitiesTagsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesTagsList**(`data?`): [`ActivitiesTagsList`](ActivitiesTagsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesTagsList`](ActivitiesTagsList.md)\> |

#### Returns

[`ActivitiesTagsList`](ActivitiesTagsList.md)

#### Overrides

Message\&lt;ActivitiesTagsList\&gt;.constructor

#### Defined in

src/activities_tags.scailo_pb.ts:425

## Properties

### list

• **list**: [`ActivityTag`](ActivityTag.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ActivityTag list = 1;

#### Defined in

src/activities_tags.scailo_pb.ts:423

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities_tags.scailo_pb.ts:432

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities_tags.scailo_pb.ts:430

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesTagsList"``

#### Defined in

src/activities_tags.scailo_pb.ts:431

## Methods

### clone

▸ **clone**(): [`ActivitiesTagsList`](ActivitiesTagsList.md)

Create a deep copy.

#### Returns

[`ActivitiesTagsList`](ActivitiesTagsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesTagsList`](ActivitiesTagsList.md) \| `PlainMessage`\<[`ActivitiesTagsList`](ActivitiesTagsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesTagsList`](ActivitiesTagsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesTagsList`](ActivitiesTagsList.md)\>

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
| `a` | `undefined` \| [`ActivitiesTagsList`](ActivitiesTagsList.md) \| `PlainMessage`\<[`ActivitiesTagsList`](ActivitiesTagsList.md)\> |
| `b` | `undefined` \| [`ActivitiesTagsList`](ActivitiesTagsList.md) \| `PlainMessage`\<[`ActivitiesTagsList`](ActivitiesTagsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities_tags.scailo_pb.ts:448

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesTagsList`](ActivitiesTagsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesTagsList`](ActivitiesTagsList.md)

#### Defined in

src/activities_tags.scailo_pb.ts:436

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesTagsList`](ActivitiesTagsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesTagsList`](ActivitiesTagsList.md)

#### Defined in

src/activities_tags.scailo_pb.ts:440

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesTagsList`](ActivitiesTagsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesTagsList`](ActivitiesTagsList.md)

#### Defined in

src/activities_tags.scailo_pb.ts:444
