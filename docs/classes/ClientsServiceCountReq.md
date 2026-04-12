[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientsServiceCountReq

# Class: ClientsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.ClientsServiceCountReq

## Hierarchy

- `Message`\<[`ClientsServiceCountReq`](ClientsServiceCountReq.md)\>

  ↳ **`ClientsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ClientsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](ClientsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](ClientsServiceCountReq.md#approvedonend)
- [approvedOnStart](ClientsServiceCountReq.md#approvedonstart)
- [approverRoleId](ClientsServiceCountReq.md#approverroleid)
- [code](ClientsServiceCountReq.md#code)
- [creationTimestampEnd](ClientsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ClientsServiceCountReq.md#creationtimestampstart)
- [email](ClientsServiceCountReq.md#email)
- [entityUuid](ClientsServiceCountReq.md#entityuuid)
- [formData](ClientsServiceCountReq.md#formdata)
- [isActive](ClientsServiceCountReq.md#isactive)
- [modificationTimestampEnd](ClientsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ClientsServiceCountReq.md#modificationtimestampstart)
- [name](ClientsServiceCountReq.md#name)
- [phone](ClientsServiceCountReq.md#phone)
- [status](ClientsServiceCountReq.md#status)
- [fields](ClientsServiceCountReq.md#fields)
- [runtime](ClientsServiceCountReq.md#runtime)
- [typeName](ClientsServiceCountReq.md#typename)

### Methods

- [clone](ClientsServiceCountReq.md#clone)
- [equals](ClientsServiceCountReq.md#equals)
- [fromBinary](ClientsServiceCountReq.md#frombinary)
- [fromJson](ClientsServiceCountReq.md#fromjson)
- [fromJsonString](ClientsServiceCountReq.md#fromjsonstring)
- [getType](ClientsServiceCountReq.md#gettype)
- [toBinary](ClientsServiceCountReq.md#tobinary)
- [toJSON](ClientsServiceCountReq.md#tojson)
- [toJson](ClientsServiceCountReq.md#tojson-1)
- [toJsonString](ClientsServiceCountReq.md#tojsonstring)
- [equals](ClientsServiceCountReq.md#equals-1)
- [fromBinary](ClientsServiceCountReq.md#frombinary-1)
- [fromJson](ClientsServiceCountReq.md#fromjson-1)
- [fromJsonString](ClientsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsServiceCountReq**(`data?`): [`ClientsServiceCountReq`](ClientsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientsServiceCountReq`](ClientsServiceCountReq.md)\> |

#### Returns

[`ClientsServiceCountReq`](ClientsServiceCountReq.md)

#### Overrides

Message\&lt;ClientsServiceCountReq\&gt;.constructor

#### Defined in

[src/clients.scailo_pb.ts:1257](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1257)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/clients.scailo_pb.ts:1204](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1204)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/clients.scailo_pb.ts:1188](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1188)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/clients.scailo_pb.ts:1172](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1172)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/clients.scailo_pb.ts:1220](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1220)

___

### code

• **code**: `string` = `""`

The unique code by which the client is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/clients.scailo_pb.ts:1234](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1234)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/clients.scailo_pb.ts:1096](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1096)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/clients.scailo_pb.ts:1080](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1080)

___

### email

• **email**: `string` = `""`

The primary email of the client

**`Generated`**

from field: string email = 22;

#### Defined in

[src/clients.scailo_pb.ts:1241](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1241)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/clients.scailo_pb.ts:1144](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1144)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/clients.scailo_pb.ts:1255](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1255)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/clients.scailo_pb.ts:1064](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1064)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/clients.scailo_pb.ts:1128](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1128)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/clients.scailo_pb.ts:1112](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1112)

___

### name

• **name**: `string` = `""`

The name of the client

**`Generated`**

from field: string name = 20;

#### Defined in

[src/clients.scailo_pb.ts:1227](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1227)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the client

**`Generated`**

from field: string phone = 23;

#### Defined in

[src/clients.scailo_pb.ts:1248](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1248)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/clients.scailo_pb.ts:1156](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1156)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients.scailo_pb.ts:1264](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1264)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients.scailo_pb.ts:1262](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1262)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientsServiceCountReq"``

#### Defined in

[src/clients.scailo_pb.ts:1263](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1263)

## Methods

### clone

▸ **clone**(): [`ClientsServiceCountReq`](ClientsServiceCountReq.md)

Create a deep copy.

#### Returns

[`ClientsServiceCountReq`](ClientsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsServiceCountReq`](ClientsServiceCountReq.md) \| `PlainMessage`\<[`ClientsServiceCountReq`](ClientsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientsServiceCountReq`](ClientsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientsServiceCountReq`](ClientsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ClientsServiceCountReq`](ClientsServiceCountReq.md) \| `PlainMessage`\<[`ClientsServiceCountReq`](ClientsServiceCountReq.md)\> |
| `b` | `undefined` \| [`ClientsServiceCountReq`](ClientsServiceCountReq.md) \| `PlainMessage`\<[`ClientsServiceCountReq`](ClientsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/clients.scailo_pb.ts:1295](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1295)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsServiceCountReq`](ClientsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientsServiceCountReq`](ClientsServiceCountReq.md)

#### Defined in

[src/clients.scailo_pb.ts:1283](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1283)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsServiceCountReq`](ClientsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceCountReq`](ClientsServiceCountReq.md)

#### Defined in

[src/clients.scailo_pb.ts:1287](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1287)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsServiceCountReq`](ClientsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceCountReq`](ClientsServiceCountReq.md)

#### Defined in

[src/clients.scailo_pb.ts:1291](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L1291)
