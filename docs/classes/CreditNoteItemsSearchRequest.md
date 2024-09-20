[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNoteItemsSearchRequest

# Class: CreditNoteItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.CreditNoteItemsSearchRequest

## Hierarchy

- `Message`\<[`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md)\>

  ↳ **`CreditNoteItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](CreditNoteItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](CreditNoteItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](CreditNoteItemsSearchRequest.md#approvedonend)
- [approvedOnStart](CreditNoteItemsSearchRequest.md#approvedonstart)
- [approverRoleId](CreditNoteItemsSearchRequest.md#approverroleid)
- [clientFamilyCode](CreditNoteItemsSearchRequest.md#clientfamilycode)
- [clientUomId](CreditNoteItemsSearchRequest.md#clientuomid)
- [count](CreditNoteItemsSearchRequest.md#count)
- [creditNoteId](CreditNoteItemsSearchRequest.md#creditnoteid)
- [entityUuid](CreditNoteItemsSearchRequest.md#entityuuid)
- [familyId](CreditNoteItemsSearchRequest.md#familyid)
- [isActive](CreditNoteItemsSearchRequest.md#isactive)
- [offset](CreditNoteItemsSearchRequest.md#offset)
- [searchKey](CreditNoteItemsSearchRequest.md#searchkey)
- [sortKey](CreditNoteItemsSearchRequest.md#sortkey)
- [sortOrder](CreditNoteItemsSearchRequest.md#sortorder)
- [status](CreditNoteItemsSearchRequest.md#status)
- [taxGroupId](CreditNoteItemsSearchRequest.md#taxgroupid)
- [fields](CreditNoteItemsSearchRequest.md#fields)
- [runtime](CreditNoteItemsSearchRequest.md#runtime)
- [typeName](CreditNoteItemsSearchRequest.md#typename)

### Methods

- [clone](CreditNoteItemsSearchRequest.md#clone)
- [equals](CreditNoteItemsSearchRequest.md#equals)
- [fromBinary](CreditNoteItemsSearchRequest.md#frombinary)
- [fromJson](CreditNoteItemsSearchRequest.md#fromjson)
- [fromJsonString](CreditNoteItemsSearchRequest.md#fromjsonstring)
- [getType](CreditNoteItemsSearchRequest.md#gettype)
- [toBinary](CreditNoteItemsSearchRequest.md#tobinary)
- [toJSON](CreditNoteItemsSearchRequest.md#tojson)
- [toJson](CreditNoteItemsSearchRequest.md#tojson-1)
- [toJsonString](CreditNoteItemsSearchRequest.md#tojsonstring)
- [equals](CreditNoteItemsSearchRequest.md#equals-1)
- [fromBinary](CreditNoteItemsSearchRequest.md#frombinary-1)
- [fromJson](CreditNoteItemsSearchRequest.md#fromjson-1)
- [fromJsonString](CreditNoteItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNoteItemsSearchRequest**(`data?`): [`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md)\> |

#### Returns

[`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md)

#### Overrides

Message\&lt;CreditNoteItemsSearchRequest\&gt;.constructor

#### Defined in

src/credit_notes.scailo_pb.ts:1540

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/credit_notes.scailo_pb.ts:1489

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/credit_notes.scailo_pb.ts:1482

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/credit_notes.scailo_pb.ts:1475

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/credit_notes.scailo_pb.ts:1496

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 25;

#### Defined in

src/credit_notes.scailo_pb.ts:1524

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

The ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 23;

#### Defined in

src/credit_notes.scailo_pb.ts:1517

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/credit_notes.scailo_pb.ts:1433

___

### creditNoteId

• **creditNoteId**: `bigint` = `protoInt64.zero`

The ID of the credit note

**`Generated`**

from field: uint64 credit_note_id = 20;

#### Defined in

src/credit_notes.scailo_pb.ts:1503

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/credit_notes.scailo_pb.ts:1461

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

src/credit_notes.scailo_pb.ts:1510

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/credit_notes.scailo_pb.ts:1426

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/credit_notes.scailo_pb.ts:1440

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/credit_notes.scailo_pb.ts:1538

___

### sortKey

• **sortKey**: [`CREDIT_NOTE_ITEM_SORT_KEY`](../enums/CREDIT_NOTE_ITEM_SORT_KEY.md) = `CREDIT_NOTE_ITEM_SORT_KEY.CREDIT_NOTE_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.CREDIT_NOTE_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/credit_notes.scailo_pb.ts:1454

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/credit_notes.scailo_pb.ts:1447

___

### status

• **status**: [`CREDIT_NOTE_ITEM_STATUS`](../enums/CREDIT_NOTE_ITEM_STATUS.md) = `CREDIT_NOTE_ITEM_STATUS.CREDIT_NOTE_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.CREDIT_NOTE_ITEM_STATUS status = 7;

#### Defined in

src/credit_notes.scailo_pb.ts:1468

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 27;

#### Defined in

src/credit_notes.scailo_pb.ts:1531

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/credit_notes.scailo_pb.ts:1547

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/credit_notes.scailo_pb.ts:1545

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNoteItemsSearchRequest"``

#### Defined in

src/credit_notes.scailo_pb.ts:1546

## Methods

### clone

▸ **clone**(): [`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md) \| `PlainMessage`\<[`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md) \| `PlainMessage`\<[`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md) \| `PlainMessage`\<[`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/credit_notes.scailo_pb.ts:1579

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:1567

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:1571

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNoteItemsSearchRequest`](CreditNoteItemsSearchRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:1575
