[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNotesServiceFilterReq

# Class: DebitNotesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.DebitNotesServiceFilterReq

## Hierarchy

- `Message`\<[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)\>

  ↳ **`DebitNotesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](DebitNotesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](DebitNotesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](DebitNotesServiceFilterReq.md#approvedonend)
- [approvedOnStart](DebitNotesServiceFilterReq.md#approvedonstart)
- [approverRoleId](DebitNotesServiceFilterReq.md#approverroleid)
- [completedOnEnd](DebitNotesServiceFilterReq.md#completedonend)
- [completedOnStart](DebitNotesServiceFilterReq.md#completedonstart)
- [count](DebitNotesServiceFilterReq.md#count)
- [creationTimestampEnd](DebitNotesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](DebitNotesServiceFilterReq.md#creationtimestampstart)
- [currencyId](DebitNotesServiceFilterReq.md#currencyid)
- [entityUuid](DebitNotesServiceFilterReq.md#entityuuid)
- [familyId](DebitNotesServiceFilterReq.md#familyid)
- [finalRefNumber](DebitNotesServiceFilterReq.md#finalrefnumber)
- [formData](DebitNotesServiceFilterReq.md#formdata)
- [isActive](DebitNotesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](DebitNotesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](DebitNotesServiceFilterReq.md#modificationtimestampstart)
- [offset](DebitNotesServiceFilterReq.md#offset)
- [projectId](DebitNotesServiceFilterReq.md#projectid)
- [refFrom](DebitNotesServiceFilterReq.md#reffrom)
- [refId](DebitNotesServiceFilterReq.md#refid)
- [referenceId](DebitNotesServiceFilterReq.md#referenceid)
- [sortKey](DebitNotesServiceFilterReq.md#sortkey)
- [sortOrder](DebitNotesServiceFilterReq.md#sortorder)
- [status](DebitNotesServiceFilterReq.md#status)
- [totalValueMax](DebitNotesServiceFilterReq.md#totalvaluemax)
- [totalValueMin](DebitNotesServiceFilterReq.md#totalvaluemin)
- [vendorId](DebitNotesServiceFilterReq.md#vendorid)
- [fields](DebitNotesServiceFilterReq.md#fields)
- [runtime](DebitNotesServiceFilterReq.md#runtime)
- [typeName](DebitNotesServiceFilterReq.md#typename)

### Methods

- [clone](DebitNotesServiceFilterReq.md#clone)
- [equals](DebitNotesServiceFilterReq.md#equals)
- [fromBinary](DebitNotesServiceFilterReq.md#frombinary)
- [fromJson](DebitNotesServiceFilterReq.md#fromjson)
- [fromJsonString](DebitNotesServiceFilterReq.md#fromjsonstring)
- [getType](DebitNotesServiceFilterReq.md#gettype)
- [toBinary](DebitNotesServiceFilterReq.md#tobinary)
- [toJSON](DebitNotesServiceFilterReq.md#tojson)
- [toJson](DebitNotesServiceFilterReq.md#tojson-1)
- [toJsonString](DebitNotesServiceFilterReq.md#tojsonstring)
- [equals](DebitNotesServiceFilterReq.md#equals-1)
- [fromBinary](DebitNotesServiceFilterReq.md#frombinary-1)
- [fromJson](DebitNotesServiceFilterReq.md#fromjson-1)
- [fromJsonString](DebitNotesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNotesServiceFilterReq**(`data?`): [`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)\> |

#### Returns

[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

#### Overrides

Message\&lt;DebitNotesServiceFilterReq\&gt;.constructor

#### Defined in

[src/debit_notes.scailo_pb.ts:1972](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1972)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/debit_notes.scailo_pb.ts:1872](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1872)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/debit_notes.scailo_pb.ts:1865](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1865)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/debit_notes.scailo_pb.ts:1858](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1858)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/debit_notes.scailo_pb.ts:1879](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1879)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/debit_notes.scailo_pb.ts:1893](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1893)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/debit_notes.scailo_pb.ts:1886](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1886)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/debit_notes.scailo_pb.ts:1788](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1788)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/debit_notes.scailo_pb.ts:1823](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1823)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/debit_notes.scailo_pb.ts:1816](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1816)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 30;

#### Defined in

[src/debit_notes.scailo_pb.ts:1928](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1928)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/debit_notes.scailo_pb.ts:1844](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1844)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/debit_notes.scailo_pb.ts:1949](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1949)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/debit_notes.scailo_pb.ts:1907](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1907)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/debit_notes.scailo_pb.ts:1970](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1970)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/debit_notes.scailo_pb.ts:1781](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1781)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/debit_notes.scailo_pb.ts:1837](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1837)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/debit_notes.scailo_pb.ts:1830](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1830)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/debit_notes.scailo_pb.ts:1795](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1795)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 32;

#### Defined in

[src/debit_notes.scailo_pb.ts:1942](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1942)

___

### refFrom

• **refFrom**: [`DEBIT_NOTE_REF_FROM`](../enums/DEBIT_NOTE_REF_FROM.md) = `DEBIT_NOTE_REF_FROM.DEBIT_NOTE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.DEBIT_NOTE_REF_FROM ref_from = 22;

#### Defined in

[src/debit_notes.scailo_pb.ts:1914](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1914)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/debit_notes.scailo_pb.ts:1921](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1921)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the debit note

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/debit_notes.scailo_pb.ts:1900](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1900)

___

### sortKey

• **sortKey**: [`DEBIT_NOTE_SORT_KEY`](../enums/DEBIT_NOTE_SORT_KEY.md) = `DEBIT_NOTE_SORT_KEY.DEBIT_NOTE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.DEBIT_NOTE_SORT_KEY sort_key = 5;

#### Defined in

[src/debit_notes.scailo_pb.ts:1809](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1809)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/debit_notes.scailo_pb.ts:1802](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1802)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this debit note

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/debit_notes.scailo_pb.ts:1851](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1851)

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the debit note (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 71;

#### Defined in

[src/debit_notes.scailo_pb.ts:1963](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1963)

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the debit note (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 70;

#### Defined in

[src/debit_notes.scailo_pb.ts:1956](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1956)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 31;

#### Defined in

[src/debit_notes.scailo_pb.ts:1935](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1935)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/debit_notes.scailo_pb.ts:1979](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1979)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/debit_notes.scailo_pb.ts:1977](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1977)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNotesServiceFilterReq"``

#### Defined in

[src/debit_notes.scailo_pb.ts:1978](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1978)

## Methods

### clone

▸ **clone**(): [`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md) \| `PlainMessage`\<[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md) \| `PlainMessage`\<[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md) \| `PlainMessage`\<[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/debit_notes.scailo_pb.ts:2022](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2022)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:2010](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2010)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:2014](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2014)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceFilterReq`](DebitNotesServiceFilterReq.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:2018](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2018)
