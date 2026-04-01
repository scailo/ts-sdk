[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceCountReq

# Class: FamiliesServiceCountReq

Describes the request to count all families with the given criteria

**`Generated`**

from message Scailo.FamiliesServiceCountReq

## Hierarchy

- `Message`\<[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)\>

  ↳ **`FamiliesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](FamiliesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](FamiliesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](FamiliesServiceCountReq.md#approvedonend)
- [approvedOnStart](FamiliesServiceCountReq.md#approvedonstart)
- [approverRoleId](FamiliesServiceCountReq.md#approverroleid)
- [code](FamiliesServiceCountReq.md#code)
- [consumptionSequence](FamiliesServiceCountReq.md#consumptionsequence)
- [creationTimestampEnd](FamiliesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](FamiliesServiceCountReq.md#creationtimestampstart)
- [entityUuid](FamiliesServiceCountReq.md#entityuuid)
- [familyType](FamiliesServiceCountReq.md#familytype)
- [formData](FamiliesServiceCountReq.md#formdata)
- [hsnSacCode](FamiliesServiceCountReq.md#hsnsaccode)
- [isActive](FamiliesServiceCountReq.md#isactive)
- [isLeaf](FamiliesServiceCountReq.md#isleaf)
- [labelId](FamiliesServiceCountReq.md#labelid)
- [ledgerId](FamiliesServiceCountReq.md#ledgerid)
- [modificationTimestampEnd](FamiliesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](FamiliesServiceCountReq.md#modificationtimestampstart)
- [multiFamilyType](FamiliesServiceCountReq.md#multifamilytype)
- [multiStatus](FamiliesServiceCountReq.md#multistatus)
- [name](FamiliesServiceCountReq.md#name)
- [parentId](FamiliesServiceCountReq.md#parentid)
- [parentStorageId](FamiliesServiceCountReq.md#parentstorageid)
- [qcGroupId](FamiliesServiceCountReq.md#qcgroupid)
- [status](FamiliesServiceCountReq.md#status)
- [taxGroupId](FamiliesServiceCountReq.md#taxgroupid)
- [unitQuantity](FamiliesServiceCountReq.md#unitquantity)
- [uomId](FamiliesServiceCountReq.md#uomid)
- [fields](FamiliesServiceCountReq.md#fields)
- [runtime](FamiliesServiceCountReq.md#runtime)
- [typeName](FamiliesServiceCountReq.md#typename)

### Methods

- [clone](FamiliesServiceCountReq.md#clone)
- [equals](FamiliesServiceCountReq.md#equals)
- [fromBinary](FamiliesServiceCountReq.md#frombinary)
- [fromJson](FamiliesServiceCountReq.md#fromjson)
- [fromJsonString](FamiliesServiceCountReq.md#fromjsonstring)
- [getType](FamiliesServiceCountReq.md#gettype)
- [toBinary](FamiliesServiceCountReq.md#tobinary)
- [toJSON](FamiliesServiceCountReq.md#tojson)
- [toJson](FamiliesServiceCountReq.md#tojson-1)
- [toJsonString](FamiliesServiceCountReq.md#tojsonstring)
- [equals](FamiliesServiceCountReq.md#equals-1)
- [fromBinary](FamiliesServiceCountReq.md#frombinary-1)
- [fromJson](FamiliesServiceCountReq.md#fromjson-1)
- [fromJsonString](FamiliesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesServiceCountReq**(`data?`): [`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)\> |

#### Returns

[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

#### Overrides

Message\&lt;FamiliesServiceCountReq\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:1861](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1861)

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

[src/families.scailo_pb.ts:1731](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1731)

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

[src/families.scailo_pb.ts:1715](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1715)

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

[src/families.scailo_pb.ts:1699](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1699)

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

[src/families.scailo_pb.ts:1747](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1747)

___

### code

• **code**: `string` = `""`

The unique code that represents the family

**`Generated`**

from field: string code = 22;

#### Defined in

[src/families.scailo_pb.ts:1761](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1761)

___

### consumptionSequence

• **consumptionSequence**: [`CONSUMPTION_SEQUENCE`](../enums/CONSUMPTION_SEQUENCE.md) = `CONSUMPTION_SEQUENCE.CONSUMPTION_SEQUENCE_ANY_UNSPECIFIED`

Stores the consumption sequence

**`Generated`**

from field: Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 39;

#### Defined in

[src/families.scailo_pb.ts:1838](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1838)

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

[src/families.scailo_pb.ts:1616](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1616)

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

[src/families.scailo_pb.ts:1600](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1600)

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

[src/families.scailo_pb.ts:1664](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1664)

___

### familyType

• **familyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md) = `FAMILY_TYPE.FAMILY_TYPE_ANY_UNSPECIFIED`

The type of the family

**`Generated`**

from field: Scailo.FAMILY_TYPE family_type = 25;

#### Defined in

[src/families.scailo_pb.ts:1768](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1768)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/families.scailo_pb.ts:1859](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1859)

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

The HSN/SAC code of the family

**`Generated`**

from field: string hsn_sac_code = 26;

#### Defined in

[src/families.scailo_pb.ts:1782](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1782)

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

[src/families.scailo_pb.ts:1584](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1584)

___

### isLeaf

• **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Filter with the given leaf property

**`Generated`**

from field: Scailo.BOOL_FILTER is_leaf = 30;

#### Defined in

[src/families.scailo_pb.ts:1810](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1810)

___

### labelId

• **labelId**: `bigint` = `protoInt64.zero`

Filter by families that have the given label ID

**`Generated`**

from field: uint64 label_id = 60;

#### Defined in

[src/families.scailo_pb.ts:1852](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1852)

___

### ledgerId

• **ledgerId**: `bigint` = `protoInt64.zero`

Stores the ID of the ledger

**`Generated`**

from field: uint64 ledger_id = 31;

#### Defined in

[src/families.scailo_pb.ts:1817](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1817)

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

[src/families.scailo_pb.ts:1648](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1648)

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

[src/families.scailo_pb.ts:1632](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1632)

___

### multiFamilyType

• **multiFamilyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md)[] = `[]`

Filter from any of the given family types. All the records that match any of the family types will be returned

**`Generated`**

from field: repeated Scailo.FAMILY_TYPE multi_family_type = 250;

#### Defined in

[src/families.scailo_pb.ts:1775](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1775)

___

### multiStatus

• **multiStatus**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)[] = `[]`

Filter with the given multiple statuses (if the list is not empty). All the records that match any of the statuses will be returned

**`Generated`**

from field: repeated Scailo.STANDARD_LIFECYCLE_STATUS multi_status = 100;

#### Defined in

[src/families.scailo_pb.ts:1683](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1683)

___

### name

• **name**: `string` = `""`

The name of the family

**`Generated`**

from field: string name = 20;

#### Defined in

[src/families.scailo_pb.ts:1754](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1754)

___

### parentId

• **parentId**: `bigint` = `protoInt64.zero`

Stores the ID of the parent family

**`Generated`**

from field: uint64 parent_id = 29;

#### Defined in

[src/families.scailo_pb.ts:1803](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1803)

___

### parentStorageId

• **parentStorageId**: `bigint` = `protoInt64.zero`

Filter by families that are present in the given parent storage ID (and all the corresponding child storage IDs)

**`Generated`**

from field: uint64 parent_storage_id = 50;

#### Defined in

[src/families.scailo_pb.ts:1845](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1845)

___

### qcGroupId

• **qcGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the QC group

**`Generated`**

from field: uint64 qc_group_id = 32;

#### Defined in

[src/families.scailo_pb.ts:1824](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1824)

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

[src/families.scailo_pb.ts:1676](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1676)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 33;

#### Defined in

[src/families.scailo_pb.ts:1831](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1831)

___

### unitQuantity

• **unitQuantity**: `bigint` = `protoInt64.zero`

Stores the unit quantity

**`Generated`**

from field: uint64 unit_quantity = 28;

#### Defined in

[src/families.scailo_pb.ts:1796](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1796)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated unit of material

**`Generated`**

from field: uint64 uom_id = 27;

#### Defined in

[src/families.scailo_pb.ts:1789](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1789)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:1868](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1868)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:1866](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1866)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceCountReq"``

#### Defined in

[src/families.scailo_pb.ts:1867](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1867)

## Methods

### clone

▸ **clone**(): [`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

Create a deep copy.

#### Returns

[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`FamiliesServiceCountReq`](FamiliesServiceCountReq.md) \| `PlainMessage`\<[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`FamiliesServiceCountReq`](FamiliesServiceCountReq.md) \| `PlainMessage`\<[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)\> |
| `b` | `undefined` \| [`FamiliesServiceCountReq`](FamiliesServiceCountReq.md) \| `PlainMessage`\<[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:1911](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1911)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

#### Defined in

[src/families.scailo_pb.ts:1899](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1899)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

#### Defined in

[src/families.scailo_pb.ts:1903](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1903)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceCountReq`](FamiliesServiceCountReq.md)

#### Defined in

[src/families.scailo_pb.ts:1907](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1907)
