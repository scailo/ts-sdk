[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNotesServiceFilterReq

# Class: CreditNotesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.CreditNotesServiceFilterReq

## Hierarchy

- `Message`\<[`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md)\>

  ↳ **`CreditNotesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](CreditNotesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](CreditNotesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](CreditNotesServiceFilterReq.md#approvedonend)
- [approvedOnStart](CreditNotesServiceFilterReq.md#approvedonstart)
- [approverRoleId](CreditNotesServiceFilterReq.md#approverroleid)
- [bankAccountId](CreditNotesServiceFilterReq.md#bankaccountid)
- [buyerClientId](CreditNotesServiceFilterReq.md#buyerclientid)
- [completedOnEnd](CreditNotesServiceFilterReq.md#completedonend)
- [completedOnStart](CreditNotesServiceFilterReq.md#completedonstart)
- [consigneeClientId](CreditNotesServiceFilterReq.md#consigneeclientid)
- [count](CreditNotesServiceFilterReq.md#count)
- [creationTimestampEnd](CreditNotesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](CreditNotesServiceFilterReq.md#creationtimestampstart)
- [currencyId](CreditNotesServiceFilterReq.md#currencyid)
- [entityUuid](CreditNotesServiceFilterReq.md#entityuuid)
- [familyId](CreditNotesServiceFilterReq.md#familyid)
- [finalRefNumber](CreditNotesServiceFilterReq.md#finalrefnumber)
- [formData](CreditNotesServiceFilterReq.md#formdata)
- [isActive](CreditNotesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](CreditNotesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](CreditNotesServiceFilterReq.md#modificationtimestampstart)
- [offset](CreditNotesServiceFilterReq.md#offset)
- [projectId](CreditNotesServiceFilterReq.md#projectid)
- [refFrom](CreditNotesServiceFilterReq.md#reffrom)
- [refId](CreditNotesServiceFilterReq.md#refid)
- [referenceId](CreditNotesServiceFilterReq.md#referenceid)
- [sortKey](CreditNotesServiceFilterReq.md#sortkey)
- [sortOrder](CreditNotesServiceFilterReq.md#sortorder)
- [status](CreditNotesServiceFilterReq.md#status)
- [totalValueMax](CreditNotesServiceFilterReq.md#totalvaluemax)
- [totalValueMin](CreditNotesServiceFilterReq.md#totalvaluemin)
- [fields](CreditNotesServiceFilterReq.md#fields)
- [runtime](CreditNotesServiceFilterReq.md#runtime)
- [typeName](CreditNotesServiceFilterReq.md#typename)

### Methods

- [clone](CreditNotesServiceFilterReq.md#clone)
- [equals](CreditNotesServiceFilterReq.md#equals)
- [fromBinary](CreditNotesServiceFilterReq.md#frombinary)
- [fromJson](CreditNotesServiceFilterReq.md#fromjson)
- [fromJsonString](CreditNotesServiceFilterReq.md#fromjsonstring)
- [getType](CreditNotesServiceFilterReq.md#gettype)
- [toBinary](CreditNotesServiceFilterReq.md#tobinary)
- [toJSON](CreditNotesServiceFilterReq.md#tojson)
- [toJson](CreditNotesServiceFilterReq.md#tojson-1)
- [toJsonString](CreditNotesServiceFilterReq.md#tojsonstring)
- [equals](CreditNotesServiceFilterReq.md#equals-1)
- [fromBinary](CreditNotesServiceFilterReq.md#frombinary-1)
- [fromJson](CreditNotesServiceFilterReq.md#fromjson-1)
- [fromJsonString](CreditNotesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNotesServiceFilterReq**(`data?`): [`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md)\> |

#### Returns

[`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md)

#### Overrides

Message\&lt;CreditNotesServiceFilterReq\&gt;.constructor

#### Defined in

[src/credit_notes.scailo_pb.ts:2051](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L2051)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/credit_notes.scailo_pb.ts:1936](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1936)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/credit_notes.scailo_pb.ts:1929](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1929)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/credit_notes.scailo_pb.ts:1922](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1922)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/credit_notes.scailo_pb.ts:1943](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1943)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The associated ID of the bank account

**`Generated`**

from field: uint64 bank_account_id = 25;

#### Defined in

[src/credit_notes.scailo_pb.ts:1999](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1999)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

[src/credit_notes.scailo_pb.ts:2021](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L2021)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/credit_notes.scailo_pb.ts:1957](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1957)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/credit_notes.scailo_pb.ts:1950](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1950)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

[src/credit_notes.scailo_pb.ts:2014](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L2014)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/credit_notes.scailo_pb.ts:1852](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1852)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/credit_notes.scailo_pb.ts:1887](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1887)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/credit_notes.scailo_pb.ts:1880](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1880)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 24;

#### Defined in

[src/credit_notes.scailo_pb.ts:1992](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1992)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/credit_notes.scailo_pb.ts:1908](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1908)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/credit_notes.scailo_pb.ts:2006](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L2006)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/credit_notes.scailo_pb.ts:1971](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1971)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/credit_notes.scailo_pb.ts:2049](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L2049)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/credit_notes.scailo_pb.ts:1845](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1845)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/credit_notes.scailo_pb.ts:1901](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1901)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/credit_notes.scailo_pb.ts:1894](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1894)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/credit_notes.scailo_pb.ts:1859](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1859)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked sales order

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

[src/credit_notes.scailo_pb.ts:2028](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L2028)

___

### refFrom

• **refFrom**: [`CREDIT_NOTE_REF_FROM`](../enums/CREDIT_NOTE_REF_FROM.md) = `CREDIT_NOTE_REF_FROM.CREDIT_NOTE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.CREDIT_NOTE_REF_FROM ref_from = 22;

#### Defined in

[src/credit_notes.scailo_pb.ts:1978](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1978)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/credit_notes.scailo_pb.ts:1985](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1985)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the credit note

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/credit_notes.scailo_pb.ts:1964](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1964)

___

### sortKey

• **sortKey**: [`CREDIT_NOTE_SORT_KEY`](../enums/CREDIT_NOTE_SORT_KEY.md) = `CREDIT_NOTE_SORT_KEY.CREDIT_NOTE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.CREDIT_NOTE_SORT_KEY sort_key = 5;

#### Defined in

[src/credit_notes.scailo_pb.ts:1873](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1873)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/credit_notes.scailo_pb.ts:1866](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1866)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this credit note

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/credit_notes.scailo_pb.ts:1915](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L1915)

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the credit note (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 71;

#### Defined in

[src/credit_notes.scailo_pb.ts:2042](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L2042)

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the credit note (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 70;

#### Defined in

[src/credit_notes.scailo_pb.ts:2035](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L2035)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/credit_notes.scailo_pb.ts:2058](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L2058)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/credit_notes.scailo_pb.ts:2056](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L2056)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNotesServiceFilterReq"``

#### Defined in

[src/credit_notes.scailo_pb.ts:2057](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L2057)

## Methods

### clone

▸ **clone**(): [`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md) \| `PlainMessage`\<[`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md) \| `PlainMessage`\<[`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md) \| `PlainMessage`\<[`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/credit_notes.scailo_pb.ts:2103](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L2103)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:2091](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L2091)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:2095](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L2095)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceFilterReq`](CreditNotesServiceFilterReq.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:2099](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/credit_notes.scailo_pb.ts#L2099)
