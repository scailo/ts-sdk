[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OvertimesServiceCountReq

# Class: OvertimesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.OvertimesServiceCountReq

## Hierarchy

- `Message`\<[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)\>

  ↳ **`OvertimesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](OvertimesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](OvertimesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](OvertimesServiceCountReq.md#approvedonend)
- [approvedOnStart](OvertimesServiceCountReq.md#approvedonstart)
- [approverRoleId](OvertimesServiceCountReq.md#approverroleid)
- [completedOnEnd](OvertimesServiceCountReq.md#completedonend)
- [completedOnStart](OvertimesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](OvertimesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](OvertimesServiceCountReq.md#creationtimestampstart)
- [entityUuid](OvertimesServiceCountReq.md#entityuuid)
- [finalRefNumber](OvertimesServiceCountReq.md#finalrefnumber)
- [formData](OvertimesServiceCountReq.md#formdata)
- [fromTimestampEnd](OvertimesServiceCountReq.md#fromtimestampend)
- [fromTimestampStart](OvertimesServiceCountReq.md#fromtimestampstart)
- [isActive](OvertimesServiceCountReq.md#isactive)
- [modificationTimestampEnd](OvertimesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](OvertimesServiceCountReq.md#modificationtimestampstart)
- [referenceId](OvertimesServiceCountReq.md#referenceid)
- [status](OvertimesServiceCountReq.md#status)
- [toTimestampEnd](OvertimesServiceCountReq.md#totimestampend)
- [toTimestampStart](OvertimesServiceCountReq.md#totimestampstart)
- [userId](OvertimesServiceCountReq.md#userid)
- [fields](OvertimesServiceCountReq.md#fields)
- [runtime](OvertimesServiceCountReq.md#runtime)
- [typeName](OvertimesServiceCountReq.md#typename)

### Methods

- [clone](OvertimesServiceCountReq.md#clone)
- [equals](OvertimesServiceCountReq.md#equals)
- [fromBinary](OvertimesServiceCountReq.md#frombinary)
- [fromJson](OvertimesServiceCountReq.md#fromjson)
- [fromJsonString](OvertimesServiceCountReq.md#fromjsonstring)
- [getType](OvertimesServiceCountReq.md#gettype)
- [toBinary](OvertimesServiceCountReq.md#tobinary)
- [toJSON](OvertimesServiceCountReq.md#tojson)
- [toJson](OvertimesServiceCountReq.md#tojson-1)
- [toJsonString](OvertimesServiceCountReq.md#tojsonstring)
- [equals](OvertimesServiceCountReq.md#equals-1)
- [fromBinary](OvertimesServiceCountReq.md#frombinary-1)
- [fromJson](OvertimesServiceCountReq.md#fromjson-1)
- [fromJsonString](OvertimesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OvertimesServiceCountReq**(`data?`): [`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)\> |

#### Returns

[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

#### Overrides

Message\&lt;OvertimesServiceCountReq\&gt;.constructor

#### Defined in

[src/overtimes.scailo_pb.ts:1461](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1461)

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

[src/overtimes.scailo_pb.ts:1337](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1337)

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

[src/overtimes.scailo_pb.ts:1321](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1321)

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

[src/overtimes.scailo_pb.ts:1305](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1305)

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

[src/overtimes.scailo_pb.ts:1353](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1353)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/overtimes.scailo_pb.ts:1385](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1385)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/overtimes.scailo_pb.ts:1369](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1369)

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

[src/overtimes.scailo_pb.ts:1229](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1229)

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

[src/overtimes.scailo_pb.ts:1213](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1213)

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

[src/overtimes.scailo_pb.ts:1277](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1277)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the system-generated ref number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/overtimes.scailo_pb.ts:1417](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1417)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/overtimes.scailo_pb.ts:1459](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1459)

___

### fromTimestampEnd

• **fromTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "from timestamp"

**`Generated`**

from field: uint64 from_timestamp_end = 25;

#### Defined in

[src/overtimes.scailo_pb.ts:1438](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1438)

___

### fromTimestampStart

• **fromTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "from timestamp"

**`Generated`**

from field: uint64 from_timestamp_start = 24;

#### Defined in

[src/overtimes.scailo_pb.ts:1431](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1431)

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

[src/overtimes.scailo_pb.ts:1197](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1197)

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

[src/overtimes.scailo_pb.ts:1261](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1261)

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

[src/overtimes.scailo_pb.ts:1245](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1245)

___

### referenceId

• **referenceId**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the user-defined reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/overtimes.scailo_pb.ts:1401](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1401)

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

[src/overtimes.scailo_pb.ts:1289](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1289)

___

### toTimestampEnd

• **toTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "to timestamp"

**`Generated`**

from field: uint64 to_timestamp_end = 27;

#### Defined in

[src/overtimes.scailo_pb.ts:1452](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1452)

___

### toTimestampStart

• **toTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "to timestamp"

**`Generated`**

from field: uint64 to_timestamp_start = 26;

#### Defined in

[src/overtimes.scailo_pb.ts:1445](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1445)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for overtime

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

[src/overtimes.scailo_pb.ts:1424](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1424)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/overtimes.scailo_pb.ts:1468](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1468)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/overtimes.scailo_pb.ts:1466](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1466)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OvertimesServiceCountReq"``

#### Defined in

[src/overtimes.scailo_pb.ts:1467](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1467)

## Methods

### clone

▸ **clone**(): [`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

Create a deep copy.

#### Returns

[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OvertimesServiceCountReq`](OvertimesServiceCountReq.md) \| `PlainMessage`\<[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`OvertimesServiceCountReq`](OvertimesServiceCountReq.md) \| `PlainMessage`\<[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)\> |
| `b` | `undefined` \| [`OvertimesServiceCountReq`](OvertimesServiceCountReq.md) \| `PlainMessage`\<[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/overtimes.scailo_pb.ts:1504](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1504)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

#### Defined in

[src/overtimes.scailo_pb.ts:1492](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1492)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

#### Defined in

[src/overtimes.scailo_pb.ts:1496](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1496)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceCountReq`](OvertimesServiceCountReq.md)

#### Defined in

[src/overtimes.scailo_pb.ts:1500](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L1500)
