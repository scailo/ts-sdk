[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AbsencesServiceCountReq

# Class: AbsencesServiceCountReq

Target filter request for counting absence records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

**`Generated`**

from message Scailo.AbsencesServiceCountReq

## Hierarchy

- `Message`\<[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)\>

  ↳ **`AbsencesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](AbsencesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](AbsencesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](AbsencesServiceCountReq.md#approvedonend)
- [approvedOnStart](AbsencesServiceCountReq.md#approvedonstart)
- [approverRoleId](AbsencesServiceCountReq.md#approverroleid)
- [completedOnEnd](AbsencesServiceCountReq.md#completedonend)
- [completedOnStart](AbsencesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](AbsencesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](AbsencesServiceCountReq.md#creationtimestampstart)
- [entityUuid](AbsencesServiceCountReq.md#entityuuid)
- [finalRefNumber](AbsencesServiceCountReq.md#finalrefnumber)
- [formData](AbsencesServiceCountReq.md#formdata)
- [fromTimestampEnd](AbsencesServiceCountReq.md#fromtimestampend)
- [fromTimestampStart](AbsencesServiceCountReq.md#fromtimestampstart)
- [isActive](AbsencesServiceCountReq.md#isactive)
- [leaveRequestId](AbsencesServiceCountReq.md#leaverequestid)
- [modificationTimestampEnd](AbsencesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](AbsencesServiceCountReq.md#modificationtimestampstart)
- [quantityMax](AbsencesServiceCountReq.md#quantitymax)
- [quantityMin](AbsencesServiceCountReq.md#quantitymin)
- [referenceId](AbsencesServiceCountReq.md#referenceid)
- [status](AbsencesServiceCountReq.md#status)
- [toTimestampEnd](AbsencesServiceCountReq.md#totimestampend)
- [toTimestampStart](AbsencesServiceCountReq.md#totimestampstart)
- [uomId](AbsencesServiceCountReq.md#uomid)
- [userId](AbsencesServiceCountReq.md#userid)
- [fields](AbsencesServiceCountReq.md#fields)
- [runtime](AbsencesServiceCountReq.md#runtime)
- [typeName](AbsencesServiceCountReq.md#typename)

### Methods

- [clone](AbsencesServiceCountReq.md#clone)
- [equals](AbsencesServiceCountReq.md#equals)
- [fromBinary](AbsencesServiceCountReq.md#frombinary)
- [fromJson](AbsencesServiceCountReq.md#fromjson)
- [fromJsonString](AbsencesServiceCountReq.md#fromjsonstring)
- [getType](AbsencesServiceCountReq.md#gettype)
- [toBinary](AbsencesServiceCountReq.md#tobinary)
- [toJSON](AbsencesServiceCountReq.md#tojson)
- [toJson](AbsencesServiceCountReq.md#tojson-1)
- [toJsonString](AbsencesServiceCountReq.md#tojsonstring)
- [equals](AbsencesServiceCountReq.md#equals-1)
- [fromBinary](AbsencesServiceCountReq.md#frombinary-1)
- [fromJson](AbsencesServiceCountReq.md#fromjson-1)
- [fromJsonString](AbsencesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AbsencesServiceCountReq**(`data?`): [`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)\> |

#### Returns

[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

#### Overrides

Message\&lt;AbsencesServiceCountReq\&gt;.constructor

#### Defined in

[src/absences.scailo_pb.ts:1956](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1956)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

**`Optional`**

**`Description`**

Filter by specific user who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_by_user_id = 13;

#### Defined in

[src/absences.scailo_pb.ts:1720](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1720)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

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

from field: optional uint64 approved_on_end = 12;

#### Defined in

[src/absences.scailo_pb.ts:1704](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1704)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

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

from field: optional uint64 approved_on_start = 11;

#### Defined in

[src/absences.scailo_pb.ts:1688](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1688)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

**`Optional`**

**`Description`**

Filter by the role used during approval.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approver_role_id = 14;

#### Defined in

[src/absences.scailo_pb.ts:1736](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1736)

___

### completedOnEnd

• `Optional` **completedOnEnd**: `bigint`

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

from field: optional uint64 completed_on_end = 16;

#### Defined in

[src/absences.scailo_pb.ts:1768](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1768)

___

### completedOnStart

• `Optional` **completedOnStart**: `bigint`

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

from field: optional uint64 completed_on_start = 15;

#### Defined in

[src/absences.scailo_pb.ts:1752](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1752)

___

### creationTimestampEnd

• `Optional` **creationTimestampEnd**: `bigint`

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

from field: optional uint64 creation_timestamp_end = 102;

#### Defined in

[src/absences.scailo_pb.ts:1612](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1612)

___

### creationTimestampStart

• `Optional` **creationTimestampStart**: `bigint`

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

from field: optional uint64 creation_timestamp_start = 101;

#### Defined in

[src/absences.scailo_pb.ts:1596](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1596)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 8;

#### Defined in

[src/absences.scailo_pb.ts:1660](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1660)

___

### finalRefNumber

• `Optional` **finalRefNumber**: `string`

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

from field: optional string final_ref_number = 21;

#### Defined in

[src/absences.scailo_pb.ts:1800](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1800)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Count based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/absences.scailo_pb.ts:1954](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1954)

___

### fromTimestampEnd

• `Optional` **fromTimestampEnd**: `bigint`

**`Optional`**

**`Description`**

Filter absences starting ON or BEFORE this timestamp.

**`Example`**

```ts
1698307200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 from_timestamp_end = 25;

#### Defined in

[src/absences.scailo_pb.ts:1864](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1864)

___

### fromTimestampStart

• `Optional` **fromTimestampStart**: `bigint`

**`Optional`**

**`Description`**

Filter absences starting ON or AFTER this timestamp.

**`Example`**

```ts
1698220800
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 from_timestamp_start = 24;

#### Defined in

[src/absences.scailo_pb.ts:1848](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1848)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/absences.scailo_pb.ts:1580](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1580)

___

### leaveRequestId

• `Optional` **leaveRequestId**: `bigint`

**`Optional`**

**`Description`**

Filter by linked leave request ID.

**`Example`**

```ts
552
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 leave_request_id = 23;

#### Defined in

[src/absences.scailo_pb.ts:1832](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1832)

___

### modificationTimestampEnd

• `Optional` **modificationTimestampEnd**: `bigint`

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

from field: optional uint64 modification_timestamp_end = 104;

#### Defined in

[src/absences.scailo_pb.ts:1644](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1644)

___

### modificationTimestampStart

• `Optional` **modificationTimestampStart**: `bigint`

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

from field: optional uint64 modification_timestamp_start = 103;

#### Defined in

[src/absences.scailo_pb.ts:1628](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1628)

___

### quantityMax

• `Optional` **quantityMax**: `bigint`

**`Optional`**

**`Description`**

Maximum quantity filter (in cents).

**`Example`**

```ts
500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 quantity_max = 30;

#### Defined in

[src/absences.scailo_pb.ts:1944](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1944)

___

### quantityMin

• `Optional` **quantityMin**: `bigint`

**`Optional`**

**`Description`**

Minimum quantity filter (in cents).

**`Example`**

```ts
100
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 quantity_min = 29;

#### Defined in

[src/absences.scailo_pb.ts:1928](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1928)

___

### referenceId

• `Optional` **referenceId**: `string`

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

from field: optional string reference_id = 20;

#### Defined in

[src/absences.scailo_pb.ts:1784](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1784)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status.

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/absences.scailo_pb.ts:1672](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1672)

___

### toTimestampEnd

• `Optional` **toTimestampEnd**: `bigint`

**`Optional`**

**`Description`**

Filter absences ending ON or BEFORE this timestamp.

**`Example`**

```ts
1698307200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 to_timestamp_end = 27;

#### Defined in

[src/absences.scailo_pb.ts:1896](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1896)

___

### toTimestampStart

• `Optional` **toTimestampStart**: `bigint`

**`Optional`**

**`Description`**

Filter absences ending ON or AFTER this timestamp.

**`Example`**

```ts
1698220800
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 to_timestamp_start = 26;

#### Defined in

[src/absences.scailo_pb.ts:1880](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1880)

___

### uomId

• `Optional` **uomId**: `bigint`

**`Optional`**

**`Description`**

Filter by specific Unit of Measure.

**`Example`**

```ts
1
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 uom_id = 28;

#### Defined in

[src/absences.scailo_pb.ts:1912](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1912)

___

### userId

• `Optional` **userId**: `bigint`

**`Optional`**

**`Description`**

Filter by specific employee ID.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 user_id = 22;

#### Defined in

[src/absences.scailo_pb.ts:1816](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1816)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/absences.scailo_pb.ts:1963](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1963)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/absences.scailo_pb.ts:1961](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1961)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AbsencesServiceCountReq"``

#### Defined in

[src/absences.scailo_pb.ts:1962](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1962)

## Methods

### clone

▸ **clone**(): [`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

Create a deep copy.

#### Returns

[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AbsencesServiceCountReq`](AbsencesServiceCountReq.md) \| `PlainMessage`\<[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`AbsencesServiceCountReq`](AbsencesServiceCountReq.md) \| `PlainMessage`\<[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)\> |
| `b` | `undefined` \| [`AbsencesServiceCountReq`](AbsencesServiceCountReq.md) \| `PlainMessage`\<[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/absences.scailo_pb.ts:2003](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L2003)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

#### Defined in

[src/absences.scailo_pb.ts:1991](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1991)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

#### Defined in

[src/absences.scailo_pb.ts:1995](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1995)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceCountReq`](AbsencesServiceCountReq.md)

#### Defined in

[src/absences.scailo_pb.ts:1999](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/absences.scailo_pb.ts#L1999)
