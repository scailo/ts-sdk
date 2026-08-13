[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingsServiceImportEmployeesRequest

# Class: MeetingsServiceImportEmployeesRequest

Describes the data model to handle importing of employees from the given identifier representing a team or a department

**`Generated`**

from message Scailo.MeetingsServiceImportEmployeesRequest

## Hierarchy

- `Message`\<[`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md)\>

  ↳ **`MeetingsServiceImportEmployeesRequest`**

## Table of contents

### Constructors

- [constructor](MeetingsServiceImportEmployeesRequest.md#constructor)

### Properties

- [deleteExisting](MeetingsServiceImportEmployeesRequest.md#deleteexisting)
- [meetingId](MeetingsServiceImportEmployeesRequest.md#meetingid)
- [resourceId](MeetingsServiceImportEmployeesRequest.md#resourceid)
- [userComment](MeetingsServiceImportEmployeesRequest.md#usercomment)
- [fields](MeetingsServiceImportEmployeesRequest.md#fields)
- [runtime](MeetingsServiceImportEmployeesRequest.md#runtime)
- [typeName](MeetingsServiceImportEmployeesRequest.md#typename)

### Methods

- [clone](MeetingsServiceImportEmployeesRequest.md#clone)
- [equals](MeetingsServiceImportEmployeesRequest.md#equals)
- [fromBinary](MeetingsServiceImportEmployeesRequest.md#frombinary)
- [fromJson](MeetingsServiceImportEmployeesRequest.md#fromjson)
- [fromJsonString](MeetingsServiceImportEmployeesRequest.md#fromjsonstring)
- [getType](MeetingsServiceImportEmployeesRequest.md#gettype)
- [toBinary](MeetingsServiceImportEmployeesRequest.md#tobinary)
- [toJSON](MeetingsServiceImportEmployeesRequest.md#tojson)
- [toJson](MeetingsServiceImportEmployeesRequest.md#tojson-1)
- [toJsonString](MeetingsServiceImportEmployeesRequest.md#tojsonstring)
- [equals](MeetingsServiceImportEmployeesRequest.md#equals-1)
- [fromBinary](MeetingsServiceImportEmployeesRequest.md#frombinary-1)
- [fromJson](MeetingsServiceImportEmployeesRequest.md#fromjson-1)
- [fromJsonString](MeetingsServiceImportEmployeesRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingsServiceImportEmployeesRequest**(`data?`): [`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md)\> |

#### Returns

[`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md)

#### Overrides

Message\&lt;MeetingsServiceImportEmployeesRequest\&gt;.constructor

#### Defined in

[src/meetings.scailo_pb.ts:2719](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/meetings.scailo_pb.ts#L2719)

## Properties

### deleteExisting

• **deleteExisting**: `boolean` = `false`

Stores if the existing employees in the meeting need to be deleted before adding from the source record

**`Generated`**

from field: bool delete_existing = 4;

#### Defined in

[src/meetings.scailo_pb.ts:2717](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/meetings.scailo_pb.ts#L2717)

___

### meetingId

• **meetingId**: `bigint` = `protoInt64.zero`

The ID of the meeting

**`Generated`**

from field: uint64 meeting_id = 2;

#### Defined in

[src/meetings.scailo_pb.ts:2703](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/meetings.scailo_pb.ts#L2703)

___

### resourceId

• **resourceId**: `bigint` = `protoInt64.zero`

The ID of the team or the department from which employees need to be added to the meeting

**`Generated`**

from field: uint64 resource_id = 3;

#### Defined in

[src/meetings.scailo_pb.ts:2710](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/meetings.scailo_pb.ts#L2710)

___

### userComment

• **userComment**: `string` = `""`

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

from field: string user_comment = 1;

#### Defined in

[src/meetings.scailo_pb.ts:2696](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/meetings.scailo_pb.ts#L2696)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/meetings.scailo_pb.ts:2726](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/meetings.scailo_pb.ts#L2726)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/meetings.scailo_pb.ts:2724](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/meetings.scailo_pb.ts#L2724)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingsServiceImportEmployeesRequest"``

#### Defined in

[src/meetings.scailo_pb.ts:2725](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/meetings.scailo_pb.ts#L2725)

## Methods

### clone

▸ **clone**(): [`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md)

Create a deep copy.

#### Returns

[`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md) \| `PlainMessage`\<[`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md)\>

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
| `a` | `undefined` \| [`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md) \| `PlainMessage`\<[`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md)\> |
| `b` | `undefined` \| [`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md) \| `PlainMessage`\<[`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/meetings.scailo_pb.ts:2745](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/meetings.scailo_pb.ts#L2745)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md)

#### Defined in

[src/meetings.scailo_pb.ts:2733](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/meetings.scailo_pb.ts#L2733)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md)

#### Defined in

[src/meetings.scailo_pb.ts:2737](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/meetings.scailo_pb.ts#L2737)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceImportEmployeesRequest`](MeetingsServiceImportEmployeesRequest.md)

#### Defined in

[src/meetings.scailo_pb.ts:2741](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/meetings.scailo_pb.ts#L2741)
