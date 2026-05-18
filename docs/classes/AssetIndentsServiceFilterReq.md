[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssetIndentsServiceFilterReq

# Class: AssetIndentsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.AssetIndentsServiceFilterReq

## Hierarchy

- `Message`\<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\>

  ↳ **`AssetIndentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](AssetIndentsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](AssetIndentsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](AssetIndentsServiceFilterReq.md#approvedonend)
- [approvedOnStart](AssetIndentsServiceFilterReq.md#approvedonstart)
- [approverRoleId](AssetIndentsServiceFilterReq.md#approverroleid)
- [completedOnEnd](AssetIndentsServiceFilterReq.md#completedonend)
- [completedOnStart](AssetIndentsServiceFilterReq.md#completedonstart)
- [constituentFamilyId](AssetIndentsServiceFilterReq.md#constituentfamilyid)
- [count](AssetIndentsServiceFilterReq.md#count)
- [creationTimestampEnd](AssetIndentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](AssetIndentsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](AssetIndentsServiceFilterReq.md#entityuuid)
- [finalRefNumber](AssetIndentsServiceFilterReq.md#finalrefnumber)
- [formData](AssetIndentsServiceFilterReq.md#formdata)
- [includeFormData](AssetIndentsServiceFilterReq.md#includeformdata)
- [isActive](AssetIndentsServiceFilterReq.md#isactive)
- [locationId](AssetIndentsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](AssetIndentsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](AssetIndentsServiceFilterReq.md#modificationtimestampstart)
- [offset](AssetIndentsServiceFilterReq.md#offset)
- [projectId](AssetIndentsServiceFilterReq.md#projectid)
- [referenceId](AssetIndentsServiceFilterReq.md#referenceid)
- [sortKey](AssetIndentsServiceFilterReq.md#sortkey)
- [sortOrder](AssetIndentsServiceFilterReq.md#sortorder)
- [status](AssetIndentsServiceFilterReq.md#status)
- [userId](AssetIndentsServiceFilterReq.md#userid)
- [fields](AssetIndentsServiceFilterReq.md#fields)
- [runtime](AssetIndentsServiceFilterReq.md#runtime)
- [typeName](AssetIndentsServiceFilterReq.md#typename)

### Methods

- [clone](AssetIndentsServiceFilterReq.md#clone)
- [equals](AssetIndentsServiceFilterReq.md#equals)
- [fromBinary](AssetIndentsServiceFilterReq.md#frombinary)
- [fromJson](AssetIndentsServiceFilterReq.md#fromjson)
- [fromJsonString](AssetIndentsServiceFilterReq.md#fromjsonstring)
- [getType](AssetIndentsServiceFilterReq.md#gettype)
- [toBinary](AssetIndentsServiceFilterReq.md#tobinary)
- [toJSON](AssetIndentsServiceFilterReq.md#tojson)
- [toJson](AssetIndentsServiceFilterReq.md#tojson-1)
- [toJsonString](AssetIndentsServiceFilterReq.md#tojsonstring)
- [equals](AssetIndentsServiceFilterReq.md#equals-1)
- [fromBinary](AssetIndentsServiceFilterReq.md#frombinary-1)
- [fromJson](AssetIndentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](AssetIndentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentsServiceFilterReq**(`data?`): [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\> |

#### Returns

[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Overrides

Message\&lt;AssetIndentsServiceFilterReq\&gt;.constructor

#### Defined in

[src/asset_indents.scailo_pb.ts:1830](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1830)

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

[src/asset_indents.scailo_pb.ts:1697](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1697)

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

[src/asset_indents.scailo_pb.ts:1681](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1681)

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

[src/asset_indents.scailo_pb.ts:1665](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1665)

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

[src/asset_indents.scailo_pb.ts:1713](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1713)

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

[src/asset_indents.scailo_pb.ts:1745](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1745)

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

[src/asset_indents.scailo_pb.ts:1729](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1729)

___

### constituentFamilyId

• **constituentFamilyId**: `bigint` = `protoInt64.zero`

The ID of the constituent family that is part of an asset indent

**`Generated`**

from field: uint64 constituent_family_id = 40;

#### Defined in

[src/asset_indents.scailo_pb.ts:1798](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1798)

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

[src/asset_indents.scailo_pb.ts:1519](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1519)

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

[src/asset_indents.scailo_pb.ts:1589](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1589)

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

[src/asset_indents.scailo_pb.ts:1573](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1573)

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

[src/asset_indents.scailo_pb.ts:1637](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1637)

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

[src/asset_indents.scailo_pb.ts:1777](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1777)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/asset_indents.scailo_pb.ts:1815](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1815)

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

[src/asset_indents.scailo_pb.ts:1828](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1828)

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

[src/asset_indents.scailo_pb.ts:1503](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1503)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

[src/asset_indents.scailo_pb.ts:1784](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1784)

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

[src/asset_indents.scailo_pb.ts:1621](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1621)

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

[src/asset_indents.scailo_pb.ts:1605](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1605)

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

[src/asset_indents.scailo_pb.ts:1535](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1535)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 50;

#### Defined in

[src/asset_indents.scailo_pb.ts:1805](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1805)

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

[src/asset_indents.scailo_pb.ts:1761](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1761)

___

### sortKey

• **sortKey**: [`ASSET_INDENT_SORT_KEY`](../enums/ASSET_INDENT_SORT_KEY.md) = `ASSET_INDENT_SORT_KEY.ASSET_INDENT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.ASSET_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/asset_indents.scailo_pb.ts:1557](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1557)

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

[src/asset_indents.scailo_pb.ts:1547](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1547)

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

[src/asset_indents.scailo_pb.ts:1649](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1649)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the associated user

**`Generated`**

from field: uint64 user_id = 25;

#### Defined in

[src/asset_indents.scailo_pb.ts:1791](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1791)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/asset_indents.scailo_pb.ts:1837](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1837)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/asset_indents.scailo_pb.ts:1835](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1835)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssetIndentsServiceFilterReq"``

#### Defined in

[src/asset_indents.scailo_pb.ts:1836](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1836)

## Methods

### clone

▸ **clone**(): [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md) \| `PlainMessage`\<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md) \| `PlainMessage`\<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md) \| `PlainMessage`\<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/asset_indents.scailo_pb.ts:1877](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1877)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:1865](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1865)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:1869](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1869)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:1873](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L1873)
