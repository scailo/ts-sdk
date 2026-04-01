[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OvertimesServiceFilterReq

# Class: OvertimesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.OvertimesServiceFilterReq

## Hierarchy

- `Message`\<[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)\>

  ↳ **`OvertimesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](OvertimesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](OvertimesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](OvertimesServiceFilterReq.md#approvedonend)
- [approvedOnStart](OvertimesServiceFilterReq.md#approvedonstart)
- [approverRoleId](OvertimesServiceFilterReq.md#approverroleid)
- [completedOnEnd](OvertimesServiceFilterReq.md#completedonend)
- [completedOnStart](OvertimesServiceFilterReq.md#completedonstart)
- [count](OvertimesServiceFilterReq.md#count)
- [creationTimestampEnd](OvertimesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](OvertimesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](OvertimesServiceFilterReq.md#entityuuid)
- [finalRefNumber](OvertimesServiceFilterReq.md#finalrefnumber)
- [formData](OvertimesServiceFilterReq.md#formdata)
- [fromTimestampEnd](OvertimesServiceFilterReq.md#fromtimestampend)
- [fromTimestampStart](OvertimesServiceFilterReq.md#fromtimestampstart)
- [isActive](OvertimesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](OvertimesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](OvertimesServiceFilterReq.md#modificationtimestampstart)
- [offset](OvertimesServiceFilterReq.md#offset)
- [referenceId](OvertimesServiceFilterReq.md#referenceid)
- [sortKey](OvertimesServiceFilterReq.md#sortkey)
- [sortOrder](OvertimesServiceFilterReq.md#sortorder)
- [status](OvertimesServiceFilterReq.md#status)
- [toTimestampEnd](OvertimesServiceFilterReq.md#totimestampend)
- [toTimestampStart](OvertimesServiceFilterReq.md#totimestampstart)
- [userId](OvertimesServiceFilterReq.md#userid)
- [fields](OvertimesServiceFilterReq.md#fields)
- [runtime](OvertimesServiceFilterReq.md#runtime)
- [typeName](OvertimesServiceFilterReq.md#typename)

### Methods

- [clone](OvertimesServiceFilterReq.md#clone)
- [equals](OvertimesServiceFilterReq.md#equals)
- [fromBinary](OvertimesServiceFilterReq.md#frombinary)
- [fromJson](OvertimesServiceFilterReq.md#fromjson)
- [fromJsonString](OvertimesServiceFilterReq.md#fromjsonstring)
- [getType](OvertimesServiceFilterReq.md#gettype)
- [toBinary](OvertimesServiceFilterReq.md#tobinary)
- [toJSON](OvertimesServiceFilterReq.md#tojson)
- [toJson](OvertimesServiceFilterReq.md#tojson-1)
- [toJsonString](OvertimesServiceFilterReq.md#tojsonstring)
- [equals](OvertimesServiceFilterReq.md#equals-1)
- [fromBinary](OvertimesServiceFilterReq.md#frombinary-1)
- [fromJson](OvertimesServiceFilterReq.md#fromjson-1)
- [fromJsonString](OvertimesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OvertimesServiceFilterReq**(`data?`): [`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)\> |

#### Returns

[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

#### Overrides

Message\&lt;OvertimesServiceFilterReq\&gt;.constructor

#### Defined in

[src/overtimes.scailo_pb.ts:1111](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L1111)

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

[src/overtimes.scailo_pb.ts:987](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L987)

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

[src/overtimes.scailo_pb.ts:971](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L971)

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

[src/overtimes.scailo_pb.ts:955](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L955)

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

[src/overtimes.scailo_pb.ts:1003](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L1003)

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

[src/overtimes.scailo_pb.ts:1035](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L1035)

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

[src/overtimes.scailo_pb.ts:1019](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L1019)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/overtimes.scailo_pb.ts:809](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L809)

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

[src/overtimes.scailo_pb.ts:879](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L879)

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

[src/overtimes.scailo_pb.ts:863](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L863)

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

[src/overtimes.scailo_pb.ts:927](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L927)

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

[src/overtimes.scailo_pb.ts:1067](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L1067)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/overtimes.scailo_pb.ts:1109](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L1109)

___

### fromTimestampEnd

• **fromTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "from timestamp"

**`Generated`**

from field: uint64 from_timestamp_end = 25;

#### Defined in

[src/overtimes.scailo_pb.ts:1088](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L1088)

___

### fromTimestampStart

• **fromTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "from timestamp"

**`Generated`**

from field: uint64 from_timestamp_start = 24;

#### Defined in

[src/overtimes.scailo_pb.ts:1081](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L1081)

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

[src/overtimes.scailo_pb.ts:793](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L793)

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

[src/overtimes.scailo_pb.ts:911](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L911)

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

[src/overtimes.scailo_pb.ts:895](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L895)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/overtimes.scailo_pb.ts:825](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L825)

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

[src/overtimes.scailo_pb.ts:1051](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L1051)

___

### sortKey

• **sortKey**: [`OVERTIME_SORT_KEY`](../enums/OVERTIME_SORT_KEY.md) = `OVERTIME_SORT_KEY.OVERTIME_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.OVERTIME_SORT_KEY sort_key = 5;

#### Defined in

[src/overtimes.scailo_pb.ts:847](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L847)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/overtimes.scailo_pb.ts:837](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L837)

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

[src/overtimes.scailo_pb.ts:939](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L939)

___

### toTimestampEnd

• **toTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "to timestamp"

**`Generated`**

from field: uint64 to_timestamp_end = 27;

#### Defined in

[src/overtimes.scailo_pb.ts:1102](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L1102)

___

### toTimestampStart

• **toTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "to timestamp"

**`Generated`**

from field: uint64 to_timestamp_start = 26;

#### Defined in

[src/overtimes.scailo_pb.ts:1095](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L1095)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for overtime

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

[src/overtimes.scailo_pb.ts:1074](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L1074)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/overtimes.scailo_pb.ts:1118](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L1118)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/overtimes.scailo_pb.ts:1116](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L1116)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OvertimesServiceFilterReq"``

#### Defined in

[src/overtimes.scailo_pb.ts:1117](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L1117)

## Methods

### clone

▸ **clone**(): [`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md) \| `PlainMessage`\<[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md) \| `PlainMessage`\<[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md) \| `PlainMessage`\<[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/overtimes.scailo_pb.ts:1158](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L1158)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

#### Defined in

[src/overtimes.scailo_pb.ts:1146](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L1146)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

#### Defined in

[src/overtimes.scailo_pb.ts:1150](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L1150)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceFilterReq`](OvertimesServiceFilterReq.md)

#### Defined in

[src/overtimes.scailo_pb.ts:1154](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L1154)
