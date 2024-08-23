[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / AttendancesAmendmentsList

# Class: AttendancesAmendmentsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.AttendancesAmendmentsList

## Hierarchy

- `Message`\<[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)\>

  ↳ **`AttendancesAmendmentsList`**

## Table of contents

### Constructors

- [constructor](AttendancesAmendmentsList.md#constructor)

### Properties

- [list](AttendancesAmendmentsList.md#list)
- [fields](AttendancesAmendmentsList.md#fields)
- [runtime](AttendancesAmendmentsList.md#runtime)
- [typeName](AttendancesAmendmentsList.md#typename)

### Methods

- [clone](AttendancesAmendmentsList.md#clone)
- [equals](AttendancesAmendmentsList.md#equals)
- [fromBinary](AttendancesAmendmentsList.md#frombinary)
- [fromJson](AttendancesAmendmentsList.md#fromjson)
- [fromJsonString](AttendancesAmendmentsList.md#fromjsonstring)
- [getType](AttendancesAmendmentsList.md#gettype)
- [toBinary](AttendancesAmendmentsList.md#tobinary)
- [toJSON](AttendancesAmendmentsList.md#tojson)
- [toJson](AttendancesAmendmentsList.md#tojson-1)
- [toJsonString](AttendancesAmendmentsList.md#tojsonstring)
- [equals](AttendancesAmendmentsList.md#equals-1)
- [fromBinary](AttendancesAmendmentsList.md#frombinary-1)
- [fromJson](AttendancesAmendmentsList.md#fromjson-1)
- [fromJsonString](AttendancesAmendmentsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesAmendmentsList**(`data?`): [`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)\> |

#### Returns

[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

#### Overrides

Message\&lt;AttendancesAmendmentsList\&gt;.constructor

#### Defined in

src/attendances_amendments.scailo_pb.ts:538

## Properties

### list

• **list**: [`AttendanceAmendment`](AttendanceAmendment.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.AttendanceAmendment list = 1;

#### Defined in

src/attendances_amendments.scailo_pb.ts:536

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/attendances_amendments.scailo_pb.ts:545

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/attendances_amendments.scailo_pb.ts:543

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AttendancesAmendmentsList"``

#### Defined in

src/attendances_amendments.scailo_pb.ts:544

## Methods

### clone

▸ **clone**(): [`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

Create a deep copy.

#### Returns

[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesAmendmentsList`](AttendancesAmendmentsList.md) \| `PlainMessage`\<[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)\>

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
| `a` | `undefined` \| [`AttendancesAmendmentsList`](AttendancesAmendmentsList.md) \| `PlainMessage`\<[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)\> |
| `b` | `undefined` \| [`AttendancesAmendmentsList`](AttendancesAmendmentsList.md) \| `PlainMessage`\<[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/attendances_amendments.scailo_pb.ts:561

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

#### Defined in

src/attendances_amendments.scailo_pb.ts:549

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

#### Defined in

src/attendances_amendments.scailo_pb.ts:553

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

#### Defined in

src/attendances_amendments.scailo_pb.ts:557
