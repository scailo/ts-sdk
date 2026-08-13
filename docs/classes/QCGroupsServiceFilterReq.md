[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCGroupsServiceFilterReq

# Class: QCGroupsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.QCGroupsServiceFilterReq

## Hierarchy

- `Message`\<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\>

  ↳ **`QCGroupsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](QCGroupsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](QCGroupsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](QCGroupsServiceFilterReq.md#approvedonend)
- [approvedOnStart](QCGroupsServiceFilterReq.md#approvedonstart)
- [approverRoleId](QCGroupsServiceFilterReq.md#approverroleid)
- [code](QCGroupsServiceFilterReq.md#code)
- [completedOnEnd](QCGroupsServiceFilterReq.md#completedonend)
- [completedOnStart](QCGroupsServiceFilterReq.md#completedonstart)
- [count](QCGroupsServiceFilterReq.md#count)
- [creationTimestampEnd](QCGroupsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](QCGroupsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](QCGroupsServiceFilterReq.md#entityuuid)
- [familyId](QCGroupsServiceFilterReq.md#familyid)
- [formData](QCGroupsServiceFilterReq.md#formdata)
- [includeFormData](QCGroupsServiceFilterReq.md#includeformdata)
- [isActive](QCGroupsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](QCGroupsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](QCGroupsServiceFilterReq.md#modificationtimestampstart)
- [name](QCGroupsServiceFilterReq.md#name)
- [offset](QCGroupsServiceFilterReq.md#offset)
- [sortKey](QCGroupsServiceFilterReq.md#sortkey)
- [sortOrder](QCGroupsServiceFilterReq.md#sortorder)
- [status](QCGroupsServiceFilterReq.md#status)
- [fields](QCGroupsServiceFilterReq.md#fields)
- [runtime](QCGroupsServiceFilterReq.md#runtime)
- [typeName](QCGroupsServiceFilterReq.md#typename)

### Methods

- [clone](QCGroupsServiceFilterReq.md#clone)
- [equals](QCGroupsServiceFilterReq.md#equals)
- [fromBinary](QCGroupsServiceFilterReq.md#frombinary)
- [fromJson](QCGroupsServiceFilterReq.md#fromjson)
- [fromJsonString](QCGroupsServiceFilterReq.md#fromjsonstring)
- [getType](QCGroupsServiceFilterReq.md#gettype)
- [toBinary](QCGroupsServiceFilterReq.md#tobinary)
- [toJSON](QCGroupsServiceFilterReq.md#tojson)
- [toJson](QCGroupsServiceFilterReq.md#tojson-1)
- [toJsonString](QCGroupsServiceFilterReq.md#tojsonstring)
- [equals](QCGroupsServiceFilterReq.md#equals-1)
- [fromBinary](QCGroupsServiceFilterReq.md#frombinary-1)
- [fromJson](QCGroupsServiceFilterReq.md#fromjson-1)
- [fromJsonString](QCGroupsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupsServiceFilterReq**(`data?`): [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\> |

#### Returns

[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Overrides

Message\&lt;QCGroupsServiceFilterReq\&gt;.constructor

#### Defined in

[src/qc_groups.scailo_pb.ts:2032](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L2032)

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

[src/qc_groups.scailo_pb.ts:1938](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L1938)

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

[src/qc_groups.scailo_pb.ts:1922](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L1922)

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

[src/qc_groups.scailo_pb.ts:1906](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L1906)

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

[src/qc_groups.scailo_pb.ts:1954](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L1954)

___

### code

• **code**: `string` = `""`

The qc group code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/qc_groups.scailo_pb.ts:2000](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L2000)

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

[src/qc_groups.scailo_pb.ts:1986](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L1986)

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

[src/qc_groups.scailo_pb.ts:1970](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L1970)

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

[src/qc_groups.scailo_pb.ts:1760](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L1760)

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

[src/qc_groups.scailo_pb.ts:1830](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L1830)

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

[src/qc_groups.scailo_pb.ts:1814](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L1814)

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

[src/qc_groups.scailo_pb.ts:1878](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L1878)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Retrieve qc groups that are assigned to the given family ID

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

[src/qc_groups.scailo_pb.ts:2007](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L2007)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/qc_groups.scailo_pb.ts:2017](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L2017)

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

[src/qc_groups.scailo_pb.ts:2030](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L2030)

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

[src/qc_groups.scailo_pb.ts:1744](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L1744)

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

[src/qc_groups.scailo_pb.ts:1862](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L1862)

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

[src/qc_groups.scailo_pb.ts:1846](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L1846)

___

### name

• **name**: `string` = `""`

The name of the qc group

**`Generated`**

from field: string name = 20;

#### Defined in

[src/qc_groups.scailo_pb.ts:1993](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L1993)

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

[src/qc_groups.scailo_pb.ts:1776](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L1776)

___

### sortKey

• **sortKey**: [`QC_GROUP_SORT_KEY`](../enums/QC_GROUP_SORT_KEY.md) = `QC_GROUP_SORT_KEY.QC_GROUP_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.QC_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/qc_groups.scailo_pb.ts:1798](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L1798)

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

[src/qc_groups.scailo_pb.ts:1788](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L1788)

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

[src/qc_groups.scailo_pb.ts:1890](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L1890)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_groups.scailo_pb.ts:2039](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L2039)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_groups.scailo_pb.ts:2037](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L2037)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCGroupsServiceFilterReq"``

#### Defined in

[src/qc_groups.scailo_pb.ts:2038](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L2038)

## Methods

### clone

▸ **clone**(): [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md) \| `PlainMessage`\<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md) \| `PlainMessage`\<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md) \| `PlainMessage`\<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_groups.scailo_pb.ts:2076](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L2076)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:2064](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L2064)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:2068](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L2068)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:2072](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_groups.scailo_pb.ts#L2072)
