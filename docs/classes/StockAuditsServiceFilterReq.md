[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockAuditsServiceFilterReq

# Class: StockAuditsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.StockAuditsServiceFilterReq

## Hierarchy

- `Message`\<[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)\>

  ↳ **`StockAuditsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](StockAuditsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](StockAuditsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](StockAuditsServiceFilterReq.md#approvedonend)
- [approvedOnStart](StockAuditsServiceFilterReq.md#approvedonstart)
- [approverRoleId](StockAuditsServiceFilterReq.md#approverroleid)
- [completedOnEnd](StockAuditsServiceFilterReq.md#completedonend)
- [completedOnStart](StockAuditsServiceFilterReq.md#completedonstart)
- [count](StockAuditsServiceFilterReq.md#count)
- [creationTimestampEnd](StockAuditsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](StockAuditsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](StockAuditsServiceFilterReq.md#entityuuid)
- [familyId](StockAuditsServiceFilterReq.md#familyid)
- [finalRefNumber](StockAuditsServiceFilterReq.md#finalrefnumber)
- [formData](StockAuditsServiceFilterReq.md#formdata)
- [isActive](StockAuditsServiceFilterReq.md#isactive)
- [locationId](StockAuditsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](StockAuditsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](StockAuditsServiceFilterReq.md#modificationtimestampstart)
- [offset](StockAuditsServiceFilterReq.md#offset)
- [referenceId](StockAuditsServiceFilterReq.md#referenceid)
- [sortKey](StockAuditsServiceFilterReq.md#sortkey)
- [sortOrder](StockAuditsServiceFilterReq.md#sortorder)
- [status](StockAuditsServiceFilterReq.md#status)
- [fields](StockAuditsServiceFilterReq.md#fields)
- [runtime](StockAuditsServiceFilterReq.md#runtime)
- [typeName](StockAuditsServiceFilterReq.md#typename)

### Methods

- [clone](StockAuditsServiceFilterReq.md#clone)
- [equals](StockAuditsServiceFilterReq.md#equals)
- [fromBinary](StockAuditsServiceFilterReq.md#frombinary)
- [fromJson](StockAuditsServiceFilterReq.md#fromjson)
- [fromJsonString](StockAuditsServiceFilterReq.md#fromjsonstring)
- [getType](StockAuditsServiceFilterReq.md#gettype)
- [toBinary](StockAuditsServiceFilterReq.md#tobinary)
- [toJSON](StockAuditsServiceFilterReq.md#tojson)
- [toJson](StockAuditsServiceFilterReq.md#tojson-1)
- [toJsonString](StockAuditsServiceFilterReq.md#tojsonstring)
- [equals](StockAuditsServiceFilterReq.md#equals-1)
- [fromBinary](StockAuditsServiceFilterReq.md#frombinary-1)
- [fromJson](StockAuditsServiceFilterReq.md#fromjson-1)
- [fromJsonString](StockAuditsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockAuditsServiceFilterReq**(`data?`): [`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)\> |

#### Returns

[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

#### Overrides

Message\&lt;StockAuditsServiceFilterReq\&gt;.constructor

#### Defined in

[src/stock_audits.scailo_pb.ts:1550](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1550)

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

[src/stock_audits.scailo_pb.ts:1447](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1447)

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

[src/stock_audits.scailo_pb.ts:1431](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1431)

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

[src/stock_audits.scailo_pb.ts:1415](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1415)

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

[src/stock_audits.scailo_pb.ts:1463](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1463)

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

[src/stock_audits.scailo_pb.ts:1495](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1495)

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

[src/stock_audits.scailo_pb.ts:1479](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1479)

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

[src/stock_audits.scailo_pb.ts:1269](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1269)

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

[src/stock_audits.scailo_pb.ts:1339](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1339)

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

[src/stock_audits.scailo_pb.ts:1323](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1323)

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

[src/stock_audits.scailo_pb.ts:1387](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1387)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

[src/stock_audits.scailo_pb.ts:1541](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1541)

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

[src/stock_audits.scailo_pb.ts:1527](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1527)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/stock_audits.scailo_pb.ts:1548](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1548)

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

[src/stock_audits.scailo_pb.ts:1253](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1253)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

[src/stock_audits.scailo_pb.ts:1534](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1534)

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

[src/stock_audits.scailo_pb.ts:1371](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1371)

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

[src/stock_audits.scailo_pb.ts:1355](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1355)

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

[src/stock_audits.scailo_pb.ts:1285](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1285)

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

[src/stock_audits.scailo_pb.ts:1511](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1511)

___

### sortKey

• **sortKey**: [`STOCK_AUDIT_SORT_KEY`](../enums/STOCK_AUDIT_SORT_KEY.md) = `STOCK_AUDIT_SORT_KEY.STOCK_AUDIT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.STOCK_AUDIT_SORT_KEY sort_key = 5;

#### Defined in

[src/stock_audits.scailo_pb.ts:1307](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1307)

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

[src/stock_audits.scailo_pb.ts:1297](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1297)

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

[src/stock_audits.scailo_pb.ts:1399](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1399)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_audits.scailo_pb.ts:1557](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1557)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_audits.scailo_pb.ts:1555](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1555)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockAuditsServiceFilterReq"``

#### Defined in

[src/stock_audits.scailo_pb.ts:1556](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1556)

## Methods

### clone

▸ **clone**(): [`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md) \| `PlainMessage`\<[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md) \| `PlainMessage`\<[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md) \| `PlainMessage`\<[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_audits.scailo_pb.ts:1594](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1594)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

#### Defined in

[src/stock_audits.scailo_pb.ts:1582](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1582)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

#### Defined in

[src/stock_audits.scailo_pb.ts:1586](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1586)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

#### Defined in

[src/stock_audits.scailo_pb.ts:1590](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_audits.scailo_pb.ts#L1590)
