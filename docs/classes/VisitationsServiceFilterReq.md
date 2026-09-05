[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VisitationsServiceFilterReq

# Class: VisitationsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.VisitationsServiceFilterReq

## Hierarchy

- `Message`\<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\>

  ↳ **`VisitationsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](VisitationsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](VisitationsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](VisitationsServiceFilterReq.md#approvedonend)
- [approvedOnStart](VisitationsServiceFilterReq.md#approvedonstart)
- [approverRoleId](VisitationsServiceFilterReq.md#approverroleid)
- [associateId](VisitationsServiceFilterReq.md#associateid)
- [completedOnEnd](VisitationsServiceFilterReq.md#completedonend)
- [completedOnStart](VisitationsServiceFilterReq.md#completedonstart)
- [count](VisitationsServiceFilterReq.md#count)
- [creationTimestampEnd](VisitationsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](VisitationsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](VisitationsServiceFilterReq.md#entityuuid)
- [entryTimestampEnd](VisitationsServiceFilterReq.md#entrytimestampend)
- [entryTimestampStart](VisitationsServiceFilterReq.md#entrytimestampstart)
- [exitTimestampEnd](VisitationsServiceFilterReq.md#exittimestampend)
- [exitTimestampStart](VisitationsServiceFilterReq.md#exittimestampstart)
- [finalRefNumber](VisitationsServiceFilterReq.md#finalrefnumber)
- [formData](VisitationsServiceFilterReq.md#formdata)
- [includeFormData](VisitationsServiceFilterReq.md#includeformdata)
- [isActive](VisitationsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](VisitationsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](VisitationsServiceFilterReq.md#modificationtimestampstart)
- [offset](VisitationsServiceFilterReq.md#offset)
- [referenceId](VisitationsServiceFilterReq.md#referenceid)
- [sortKey](VisitationsServiceFilterReq.md#sortkey)
- [sortOrder](VisitationsServiceFilterReq.md#sortorder)
- [status](VisitationsServiceFilterReq.md#status)
- [userId](VisitationsServiceFilterReq.md#userid)
- [fields](VisitationsServiceFilterReq.md#fields)
- [runtime](VisitationsServiceFilterReq.md#runtime)
- [typeName](VisitationsServiceFilterReq.md#typename)

### Methods

- [clone](VisitationsServiceFilterReq.md#clone)
- [equals](VisitationsServiceFilterReq.md#equals)
- [fromBinary](VisitationsServiceFilterReq.md#frombinary)
- [fromJson](VisitationsServiceFilterReq.md#fromjson)
- [fromJsonString](VisitationsServiceFilterReq.md#fromjsonstring)
- [getType](VisitationsServiceFilterReq.md#gettype)
- [toBinary](VisitationsServiceFilterReq.md#tobinary)
- [toJSON](VisitationsServiceFilterReq.md#tojson)
- [toJson](VisitationsServiceFilterReq.md#tojson-1)
- [toJsonString](VisitationsServiceFilterReq.md#tojsonstring)
- [equals](VisitationsServiceFilterReq.md#equals-1)
- [fromBinary](VisitationsServiceFilterReq.md#frombinary-1)
- [fromJson](VisitationsServiceFilterReq.md#fromjson-1)
- [fromJsonString](VisitationsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VisitationsServiceFilterReq**(`data?`): [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\> |

#### Returns

[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Overrides

Message\&lt;VisitationsServiceFilterReq\&gt;.constructor

#### Defined in

[src/visitations.scailo_pb.ts:1388](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1388)

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

[src/visitations.scailo_pb.ts:1241](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1241)

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

[src/visitations.scailo_pb.ts:1225](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1225)

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

[src/visitations.scailo_pb.ts:1209](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1209)

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

[src/visitations.scailo_pb.ts:1257](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1257)

___

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

The ID of the associate who has requested for visitation

**`Generated`**

from field: uint64 associate_id = 23;

#### Defined in

[src/visitations.scailo_pb.ts:1335](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1335)

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

[src/visitations.scailo_pb.ts:1289](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1289)

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

[src/visitations.scailo_pb.ts:1273](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1273)

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

[src/visitations.scailo_pb.ts:1063](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1063)

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

[src/visitations.scailo_pb.ts:1133](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1133)

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

[src/visitations.scailo_pb.ts:1117](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1117)

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

[src/visitations.scailo_pb.ts:1181](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1181)

___

### entryTimestampEnd

• **entryTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "from timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: uint64 entry_timestamp_end = 25;

#### Defined in

[src/visitations.scailo_pb.ts:1349](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1349)

___

### entryTimestampStart

• **entryTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "from timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: uint64 entry_timestamp_start = 24;

#### Defined in

[src/visitations.scailo_pb.ts:1342](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1342)

___

### exitTimestampEnd

• **exitTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "to timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: uint64 exit_timestamp_end = 27;

#### Defined in

[src/visitations.scailo_pb.ts:1363](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1363)

___

### exitTimestampStart

• **exitTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "to timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: uint64 exit_timestamp_start = 26;

#### Defined in

[src/visitations.scailo_pb.ts:1356](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1356)

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

[src/visitations.scailo_pb.ts:1321](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1321)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/visitations.scailo_pb.ts:1373](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1373)

___

### includeFormData

• **includeFormData**: `boolean` = `false`

**`Optional`**

**`Description`**

If `true`, the response will include the associated custom form field values for each record.
Set to `false` to improve performance when form data is not needed.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool include_form_data = 501;

#### Defined in

[src/visitations.scailo_pb.ts:1386](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1386)

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

[src/visitations.scailo_pb.ts:1047](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1047)

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

[src/visitations.scailo_pb.ts:1165](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1165)

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

[src/visitations.scailo_pb.ts:1149](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1149)

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

[src/visitations.scailo_pb.ts:1079](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1079)

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

[src/visitations.scailo_pb.ts:1305](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1305)

___

### sortKey

• **sortKey**: [`VISITATION_SORT_KEY`](../enums/VISITATION_SORT_KEY.md) = `VISITATION_SORT_KEY.VISITATION_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.VISITATION_SORT_KEY sort_key = 5;

#### Defined in

[src/visitations.scailo_pb.ts:1101](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1101)

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

[src/visitations.scailo_pb.ts:1091](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1091)

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

[src/visitations.scailo_pb.ts:1193](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1193)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who is being visited

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

[src/visitations.scailo_pb.ts:1328](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1328)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/visitations.scailo_pb.ts:1395](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1395)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/visitations.scailo_pb.ts:1393](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1393)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VisitationsServiceFilterReq"``

#### Defined in

[src/visitations.scailo_pb.ts:1394](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1394)

## Methods

### clone

▸ **clone**(): [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md) \| `PlainMessage`\<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md) \| `PlainMessage`\<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md) \| `PlainMessage`\<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/visitations.scailo_pb.ts:1437](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1437)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Defined in

[src/visitations.scailo_pb.ts:1425](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1425)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Defined in

[src/visitations.scailo_pb.ts:1429](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1429)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Defined in

[src/visitations.scailo_pb.ts:1433](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1433)
