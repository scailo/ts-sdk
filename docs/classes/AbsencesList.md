[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AbsencesList

# Class: AbsencesList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.AbsencesList

## Hierarchy

- `Message`\<[`AbsencesList`](AbsencesList.md)\>

  ↳ **`AbsencesList`**

## Table of contents

### Constructors

- [constructor](AbsencesList.md#constructor)

### Properties

- [list](AbsencesList.md#list)
- [fields](AbsencesList.md#fields)
- [runtime](AbsencesList.md#runtime)
- [typeName](AbsencesList.md#typename)

### Methods

- [clone](AbsencesList.md#clone)
- [equals](AbsencesList.md#equals)
- [fromBinary](AbsencesList.md#frombinary)
- [fromJson](AbsencesList.md#fromjson)
- [fromJsonString](AbsencesList.md#fromjsonstring)
- [getType](AbsencesList.md#gettype)
- [toBinary](AbsencesList.md#tobinary)
- [toJSON](AbsencesList.md#tojson)
- [toJson](AbsencesList.md#tojson-1)
- [toJsonString](AbsencesList.md#tojsonstring)
- [equals](AbsencesList.md#equals-1)
- [fromBinary](AbsencesList.md#frombinary-1)
- [fromJson](AbsencesList.md#fromjson-1)
- [fromJsonString](AbsencesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new AbsencesList**(`data?`): [`AbsencesList`](AbsencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AbsencesList`](AbsencesList.md)\> |

#### Returns

[`AbsencesList`](AbsencesList.md)

#### Overrides

Message\&lt;AbsencesList\&gt;.constructor

#### Defined in

src/absences.scailo_pb.ts:564

## Properties

### list

• **list**: [`Absence`](Absence.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.Absence list = 1;

#### Defined in

src/absences.scailo_pb.ts:562

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/absences.scailo_pb.ts:571

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/absences.scailo_pb.ts:569

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AbsencesList"``

#### Defined in

src/absences.scailo_pb.ts:570

## Methods

### clone

▸ **clone**(): [`AbsencesList`](AbsencesList.md)

Create a deep copy.

#### Returns

[`AbsencesList`](AbsencesList.md)

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
| `other` | `undefined` \| ``null`` \| [`AbsencesList`](AbsencesList.md) \| `PlainMessage`\<[`AbsencesList`](AbsencesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`AbsencesList`](AbsencesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AbsencesList`](AbsencesList.md)\>

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
| `a` | `undefined` \| [`AbsencesList`](AbsencesList.md) \| `PlainMessage`\<[`AbsencesList`](AbsencesList.md)\> |
| `b` | `undefined` \| [`AbsencesList`](AbsencesList.md) \| `PlainMessage`\<[`AbsencesList`](AbsencesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/absences.scailo_pb.ts:587

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AbsencesList`](AbsencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AbsencesList`](AbsencesList.md)

#### Defined in

src/absences.scailo_pb.ts:575

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AbsencesList`](AbsencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbsencesList`](AbsencesList.md)

#### Defined in

src/absences.scailo_pb.ts:579

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AbsencesList`](AbsencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbsencesList`](AbsencesList.md)

#### Defined in

src/absences.scailo_pb.ts:583
