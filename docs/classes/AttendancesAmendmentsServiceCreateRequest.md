[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AttendancesAmendmentsServiceCreateRequest

# Class: AttendancesAmendmentsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.AttendancesAmendmentsServiceCreateRequest

## Hierarchy

- `Message`\<[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)\>

  ↳ **`AttendancesAmendmentsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](AttendancesAmendmentsServiceCreateRequest.md#constructor)

### Properties

- [amendmentEntryTimestamp](AttendancesAmendmentsServiceCreateRequest.md#amendmententrytimestamp)
- [amendmentExitTimestamp](AttendancesAmendmentsServiceCreateRequest.md#amendmentexittimestamp)
- [attendanceId](AttendancesAmendmentsServiceCreateRequest.md#attendanceid)
- [description](AttendancesAmendmentsServiceCreateRequest.md#description)
- [entityUuid](AttendancesAmendmentsServiceCreateRequest.md#entityuuid)
- [formData](AttendancesAmendmentsServiceCreateRequest.md#formdata)
- [referenceId](AttendancesAmendmentsServiceCreateRequest.md#referenceid)
- [userComment](AttendancesAmendmentsServiceCreateRequest.md#usercomment)
- [userId](AttendancesAmendmentsServiceCreateRequest.md#userid)
- [vaultFolderId](AttendancesAmendmentsServiceCreateRequest.md#vaultfolderid)
- [fields](AttendancesAmendmentsServiceCreateRequest.md#fields)
- [runtime](AttendancesAmendmentsServiceCreateRequest.md#runtime)
- [typeName](AttendancesAmendmentsServiceCreateRequest.md#typename)

### Methods

- [clone](AttendancesAmendmentsServiceCreateRequest.md#clone)
- [equals](AttendancesAmendmentsServiceCreateRequest.md#equals)
- [fromBinary](AttendancesAmendmentsServiceCreateRequest.md#frombinary)
- [fromJson](AttendancesAmendmentsServiceCreateRequest.md#fromjson)
- [fromJsonString](AttendancesAmendmentsServiceCreateRequest.md#fromjsonstring)
- [getType](AttendancesAmendmentsServiceCreateRequest.md#gettype)
- [toBinary](AttendancesAmendmentsServiceCreateRequest.md#tobinary)
- [toJSON](AttendancesAmendmentsServiceCreateRequest.md#tojson)
- [toJson](AttendancesAmendmentsServiceCreateRequest.md#tojson-1)
- [toJsonString](AttendancesAmendmentsServiceCreateRequest.md#tojsonstring)
- [equals](AttendancesAmendmentsServiceCreateRequest.md#equals-1)
- [fromBinary](AttendancesAmendmentsServiceCreateRequest.md#frombinary-1)
- [fromJson](AttendancesAmendmentsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](AttendancesAmendmentsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesAmendmentsServiceCreateRequest**(`data?`): [`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)\> |

#### Returns

[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

#### Overrides

Message\&lt;AttendancesAmendmentsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/attendances_amendments.scailo_pb.ts:254](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L254)

## Properties

### amendmentEntryTimestamp

• **amendmentEntryTimestamp**: `bigint` = `protoInt64.zero`

The amended entry timestamp

**`Generated`**

from field: uint64 amendment_entry_timestamp = 13;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:224](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L224)

___

### amendmentExitTimestamp

• **amendmentExitTimestamp**: `bigint` = `protoInt64.zero`

The amended exit timestamp

**`Generated`**

from field: uint64 amendment_exit_timestamp = 14;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:231](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L231)

___

### attendanceId

• **attendanceId**: `bigint` = `protoInt64.zero`

The ID of the associated attendance that needs to be amended

**`Generated`**

from field: uint64 attendance_id = 12;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:217](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L217)

___

### description

• **description**: `string` = `""`

The description of the attendance amendment

**`Generated`**

from field: string description = 15;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:238](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L238)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:155](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L155)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:252](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L252)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:203](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L203)

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

from field: string user_comment = 2;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:171](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L171)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for attendance amendment

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:210](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L210)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.

**`Example`**

```ts
15234
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:187](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L187)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances_amendments.scailo_pb.ts:261](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L261)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances_amendments.scailo_pb.ts:259](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L259)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AttendancesAmendmentsServiceCreateRequest"``

#### Defined in

[src/attendances_amendments.scailo_pb.ts:260](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L260)

## Methods

### clone

▸ **clone**(): [`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md) \| `PlainMessage`\<[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md) \| `PlainMessage`\<[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md) \| `PlainMessage`\<[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances_amendments.scailo_pb.ts:286](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L286)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

#### Defined in

[src/attendances_amendments.scailo_pb.ts:274](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L274)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

#### Defined in

[src/attendances_amendments.scailo_pb.ts:278](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L278)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

#### Defined in

[src/attendances_amendments.scailo_pb.ts:282](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L282)
