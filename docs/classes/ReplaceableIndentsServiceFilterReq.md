[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServiceFilterReq

# Class: ReplaceableIndentsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.ReplaceableIndentsServiceFilterReq

## Hierarchy

- `Message`\<[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)\>

  ↳ **`ReplaceableIndentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ReplaceableIndentsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ReplaceableIndentsServiceFilterReq.md#approvedonend)
- [approvedOnStart](ReplaceableIndentsServiceFilterReq.md#approvedonstart)
- [approverRoleId](ReplaceableIndentsServiceFilterReq.md#approverroleid)
- [completedOnEnd](ReplaceableIndentsServiceFilterReq.md#completedonend)
- [completedOnStart](ReplaceableIndentsServiceFilterReq.md#completedonstart)
- [constituentFamilyId](ReplaceableIndentsServiceFilterReq.md#constituentfamilyid)
- [count](ReplaceableIndentsServiceFilterReq.md#count)
- [creationTimestampEnd](ReplaceableIndentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ReplaceableIndentsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](ReplaceableIndentsServiceFilterReq.md#entityuuid)
- [familyId](ReplaceableIndentsServiceFilterReq.md#familyid)
- [finalRefNumber](ReplaceableIndentsServiceFilterReq.md#finalrefnumber)
- [formData](ReplaceableIndentsServiceFilterReq.md#formdata)
- [isActive](ReplaceableIndentsServiceFilterReq.md#isactive)
- [itemHash](ReplaceableIndentsServiceFilterReq.md#itemhash)
- [locationId](ReplaceableIndentsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](ReplaceableIndentsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ReplaceableIndentsServiceFilterReq.md#modificationtimestampstart)
- [offset](ReplaceableIndentsServiceFilterReq.md#offset)
- [referenceId](ReplaceableIndentsServiceFilterReq.md#referenceid)
- [sortKey](ReplaceableIndentsServiceFilterReq.md#sortkey)
- [sortOrder](ReplaceableIndentsServiceFilterReq.md#sortorder)
- [status](ReplaceableIndentsServiceFilterReq.md#status)
- [supervisor](ReplaceableIndentsServiceFilterReq.md#supervisor)
- [fields](ReplaceableIndentsServiceFilterReq.md#fields)
- [runtime](ReplaceableIndentsServiceFilterReq.md#runtime)
- [typeName](ReplaceableIndentsServiceFilterReq.md#typename)

### Methods

- [clone](ReplaceableIndentsServiceFilterReq.md#clone)
- [equals](ReplaceableIndentsServiceFilterReq.md#equals)
- [fromBinary](ReplaceableIndentsServiceFilterReq.md#frombinary)
- [fromJson](ReplaceableIndentsServiceFilterReq.md#fromjson)
- [fromJsonString](ReplaceableIndentsServiceFilterReq.md#fromjsonstring)
- [getType](ReplaceableIndentsServiceFilterReq.md#gettype)
- [toBinary](ReplaceableIndentsServiceFilterReq.md#tobinary)
- [toJSON](ReplaceableIndentsServiceFilterReq.md#tojson)
- [toJson](ReplaceableIndentsServiceFilterReq.md#tojson-1)
- [toJsonString](ReplaceableIndentsServiceFilterReq.md#tojsonstring)
- [equals](ReplaceableIndentsServiceFilterReq.md#equals-1)
- [fromBinary](ReplaceableIndentsServiceFilterReq.md#frombinary-1)
- [fromJson](ReplaceableIndentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServiceFilterReq**(`data?`): [`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)\> |

#### Returns

[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

#### Overrides

Message\&lt;ReplaceableIndentsServiceFilterReq\&gt;.constructor

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1649](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1649)

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

[src/replaceable_indents.scailo_pb.ts:1525](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1525)

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

[src/replaceable_indents.scailo_pb.ts:1509](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1509)

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

[src/replaceable_indents.scailo_pb.ts:1493](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1493)

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

[src/replaceable_indents.scailo_pb.ts:1541](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1541)

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

[src/replaceable_indents.scailo_pb.ts:1573](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1573)

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

[src/replaceable_indents.scailo_pb.ts:1557](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1557)

___

### constituentFamilyId

• **constituentFamilyId**: `bigint` = `protoInt64.zero`

The ID of the constituent family that is part of a replaceable indent

**`Generated`**

from field: uint64 constituent_family_id = 40;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1640](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1640)

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

[src/replaceable_indents.scailo_pb.ts:1347](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1347)

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

[src/replaceable_indents.scailo_pb.ts:1417](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1417)

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

[src/replaceable_indents.scailo_pb.ts:1401](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1401)

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

[src/replaceable_indents.scailo_pb.ts:1465](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1465)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 25;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1626](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1626)

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

[src/replaceable_indents.scailo_pb.ts:1605](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1605)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1647](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1647)

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

[src/replaceable_indents.scailo_pb.ts:1331](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1331)

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 26;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1633](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1633)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 23;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1612](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1612)

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

[src/replaceable_indents.scailo_pb.ts:1449](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1449)

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

[src/replaceable_indents.scailo_pb.ts:1433](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1433)

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

[src/replaceable_indents.scailo_pb.ts:1363](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1363)

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

[src/replaceable_indents.scailo_pb.ts:1589](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1589)

___

### sortKey

• **sortKey**: [`REPLACEABLE_INDENT_SORT_KEY`](../enums/REPLACEABLE_INDENT_SORT_KEY.md) = `REPLACEABLE_INDENT_SORT_KEY.REPLACEABLE_INDENT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.REPLACEABLE_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1385](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1385)

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

[src/replaceable_indents.scailo_pb.ts:1375](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1375)

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

[src/replaceable_indents.scailo_pb.ts:1477](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1477)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 24;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1619](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1619)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1656](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1656)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1654](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1654)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndentsServiceFilterReq"``

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1655](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1655)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1696](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1696)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1684](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1684)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1688](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1688)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceFilterReq`](ReplaceableIndentsServiceFilterReq.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1692](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1692)
