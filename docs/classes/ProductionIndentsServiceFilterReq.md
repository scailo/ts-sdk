[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentsServiceFilterReq

# Class: ProductionIndentsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.ProductionIndentsServiceFilterReq

## Hierarchy

- `Message`\<[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)\>

  ↳ **`ProductionIndentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ProductionIndentsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ProductionIndentsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ProductionIndentsServiceFilterReq.md#approvedonend)
- [approvedOnStart](ProductionIndentsServiceFilterReq.md#approvedonstart)
- [approverRoleId](ProductionIndentsServiceFilterReq.md#approverroleid)
- [completedOnEnd](ProductionIndentsServiceFilterReq.md#completedonend)
- [completedOnStart](ProductionIndentsServiceFilterReq.md#completedonstart)
- [count](ProductionIndentsServiceFilterReq.md#count)
- [creationTimestampEnd](ProductionIndentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ProductionIndentsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](ProductionIndentsServiceFilterReq.md#entityuuid)
- [familyId](ProductionIndentsServiceFilterReq.md#familyid)
- [finalRefNumber](ProductionIndentsServiceFilterReq.md#finalrefnumber)
- [formData](ProductionIndentsServiceFilterReq.md#formdata)
- [includeFormData](ProductionIndentsServiceFilterReq.md#includeformdata)
- [indentRefFor](ProductionIndentsServiceFilterReq.md#indentreffor)
- [indentRefId](ProductionIndentsServiceFilterReq.md#indentrefid)
- [isActive](ProductionIndentsServiceFilterReq.md#isactive)
- [locationId](ProductionIndentsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](ProductionIndentsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ProductionIndentsServiceFilterReq.md#modificationtimestampstart)
- [offset](ProductionIndentsServiceFilterReq.md#offset)
- [productionRefFor](ProductionIndentsServiceFilterReq.md#productionreffor)
- [productionRefId](ProductionIndentsServiceFilterReq.md#productionrefid)
- [referenceId](ProductionIndentsServiceFilterReq.md#referenceid)
- [sortKey](ProductionIndentsServiceFilterReq.md#sortkey)
- [sortOrder](ProductionIndentsServiceFilterReq.md#sortorder)
- [status](ProductionIndentsServiceFilterReq.md#status)
- [supervisor](ProductionIndentsServiceFilterReq.md#supervisor)
- [fields](ProductionIndentsServiceFilterReq.md#fields)
- [runtime](ProductionIndentsServiceFilterReq.md#runtime)
- [typeName](ProductionIndentsServiceFilterReq.md#typename)

### Methods

- [clone](ProductionIndentsServiceFilterReq.md#clone)
- [equals](ProductionIndentsServiceFilterReq.md#equals)
- [fromBinary](ProductionIndentsServiceFilterReq.md#frombinary)
- [fromJson](ProductionIndentsServiceFilterReq.md#fromjson)
- [fromJsonString](ProductionIndentsServiceFilterReq.md#fromjsonstring)
- [getType](ProductionIndentsServiceFilterReq.md#gettype)
- [toBinary](ProductionIndentsServiceFilterReq.md#tobinary)
- [toJSON](ProductionIndentsServiceFilterReq.md#tojson)
- [toJson](ProductionIndentsServiceFilterReq.md#tojson-1)
- [toJsonString](ProductionIndentsServiceFilterReq.md#tojsonstring)
- [equals](ProductionIndentsServiceFilterReq.md#equals-1)
- [fromBinary](ProductionIndentsServiceFilterReq.md#frombinary-1)
- [fromJson](ProductionIndentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ProductionIndentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentsServiceFilterReq**(`data?`): [`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)\> |

#### Returns

[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

#### Overrides

Message\&lt;ProductionIndentsServiceFilterReq\&gt;.constructor

#### Defined in

[src/production_indents.scailo_pb.ts:1838](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1838)

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

[src/production_indents.scailo_pb.ts:1684](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1684)

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

[src/production_indents.scailo_pb.ts:1668](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1668)

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

[src/production_indents.scailo_pb.ts:1652](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1652)

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

[src/production_indents.scailo_pb.ts:1700](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1700)

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

[src/production_indents.scailo_pb.ts:1732](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1732)

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

[src/production_indents.scailo_pb.ts:1716](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1716)

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

[src/production_indents.scailo_pb.ts:1506](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1506)

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

[src/production_indents.scailo_pb.ts:1576](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1576)

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

[src/production_indents.scailo_pb.ts:1560](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1560)

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

[src/production_indents.scailo_pb.ts:1624](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1624)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/production_indents.scailo_pb.ts:1813](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1813)

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

[src/production_indents.scailo_pb.ts:1764](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1764)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/production_indents.scailo_pb.ts:1823](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1823)

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

[src/production_indents.scailo_pb.ts:1836](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1836)

___

### indentRefFor

• **indentRefFor**: [`PRODUCTION_INDENT_INDENT_REF_FOR`](../enums/PRODUCTION_INDENT_INDENT_REF_FOR.md) = `PRODUCTION_INDENT_INDENT_REF_FOR.PRODUCTION_INDENT_INDENT_REF_FOR_ANY_UNSPECIFIED`

Stores if the indent should be created on the basis of a work order or a family

**`Generated`**

from field: Scailo.PRODUCTION_INDENT_INDENT_REF_FOR indent_ref_for = 28;

#### Defined in

[src/production_indents.scailo_pb.ts:1799](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1799)

___

### indentRefId

• **indentRefId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family or work order

**`Generated`**

from field: uint64 indent_ref_id = 29;

#### Defined in

[src/production_indents.scailo_pb.ts:1806](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1806)

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

[src/production_indents.scailo_pb.ts:1490](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1490)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

[src/production_indents.scailo_pb.ts:1771](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1771)

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

[src/production_indents.scailo_pb.ts:1608](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1608)

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

[src/production_indents.scailo_pb.ts:1592](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1592)

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

[src/production_indents.scailo_pb.ts:1522](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1522)

___

### productionRefFor

• **productionRefFor**: [`PRODUCTION_INDENT_PRODUCTION_REF_FOR`](../enums/PRODUCTION_INDENT_PRODUCTION_REF_FOR.md) = `PRODUCTION_INDENT_PRODUCTION_REF_FOR.PRODUCTION_INDENT_PRODUCTION_REF_FOR_ANY_UNSPECIFIED`

Stores if the indent is associated to a production plan

**`Generated`**

from field: Scailo.PRODUCTION_INDENT_PRODUCTION_REF_FOR production_ref_for = 26;

#### Defined in

[src/production_indents.scailo_pb.ts:1785](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1785)

___

### productionRefId

• **productionRefId**: `bigint` = `protoInt64.zero`

Stores the production plan ID if production_ref_for is production-plan

**`Generated`**

from field: uint64 production_ref_id = 27;

#### Defined in

[src/production_indents.scailo_pb.ts:1792](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1792)

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

[src/production_indents.scailo_pb.ts:1748](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1748)

___

### sortKey

• **sortKey**: [`PRODUCTION_INDENT_SORT_KEY`](../enums/PRODUCTION_INDENT_SORT_KEY.md) = `PRODUCTION_INDENT_SORT_KEY.PRODUCTION_INDENT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.PRODUCTION_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/production_indents.scailo_pb.ts:1544](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1544)

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

[src/production_indents.scailo_pb.ts:1534](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1534)

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

[src/production_indents.scailo_pb.ts:1636](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1636)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 25;

#### Defined in

[src/production_indents.scailo_pb.ts:1778](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1778)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_indents.scailo_pb.ts:1845](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1845)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_indents.scailo_pb.ts:1843](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1843)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionIndentsServiceFilterReq"``

#### Defined in

[src/production_indents.scailo_pb.ts:1844](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1844)

## Methods

### clone

▸ **clone**(): [`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md) \| `PlainMessage`\<[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md) \| `PlainMessage`\<[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md) \| `PlainMessage`\<[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_indents.scailo_pb.ts:1888](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1888)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

#### Defined in

[src/production_indents.scailo_pb.ts:1876](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1876)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

#### Defined in

[src/production_indents.scailo_pb.ts:1880](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1880)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

#### Defined in

[src/production_indents.scailo_pb.ts:1884](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/production_indents.scailo_pb.ts#L1884)
