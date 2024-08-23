[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNoteItemsSearchRequest

# Class: DebitNoteItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.DebitNoteItemsSearchRequest

## Hierarchy

- `Message`\<[`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md)\>

  ↳ **`DebitNoteItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](DebitNoteItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](DebitNoteItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](DebitNoteItemsSearchRequest.md#approvedonend)
- [approvedOnStart](DebitNoteItemsSearchRequest.md#approvedonstart)
- [approverRoleId](DebitNoteItemsSearchRequest.md#approverroleid)
- [count](DebitNoteItemsSearchRequest.md#count)
- [debitNoteId](DebitNoteItemsSearchRequest.md#debitnoteid)
- [entityUuid](DebitNoteItemsSearchRequest.md#entityuuid)
- [familyId](DebitNoteItemsSearchRequest.md#familyid)
- [isActive](DebitNoteItemsSearchRequest.md#isactive)
- [offset](DebitNoteItemsSearchRequest.md#offset)
- [searchKey](DebitNoteItemsSearchRequest.md#searchkey)
- [sortKey](DebitNoteItemsSearchRequest.md#sortkey)
- [sortOrder](DebitNoteItemsSearchRequest.md#sortorder)
- [status](DebitNoteItemsSearchRequest.md#status)
- [taxGroupId](DebitNoteItemsSearchRequest.md#taxgroupid)
- [vendorUomId](DebitNoteItemsSearchRequest.md#vendoruomid)
- [fields](DebitNoteItemsSearchRequest.md#fields)
- [runtime](DebitNoteItemsSearchRequest.md#runtime)
- [typeName](DebitNoteItemsSearchRequest.md#typename)

### Methods

- [clone](DebitNoteItemsSearchRequest.md#clone)
- [equals](DebitNoteItemsSearchRequest.md#equals)
- [fromBinary](DebitNoteItemsSearchRequest.md#frombinary)
- [fromJson](DebitNoteItemsSearchRequest.md#fromjson)
- [fromJsonString](DebitNoteItemsSearchRequest.md#fromjsonstring)
- [getType](DebitNoteItemsSearchRequest.md#gettype)
- [toBinary](DebitNoteItemsSearchRequest.md#tobinary)
- [toJSON](DebitNoteItemsSearchRequest.md#tojson)
- [toJson](DebitNoteItemsSearchRequest.md#tojson-1)
- [toJsonString](DebitNoteItemsSearchRequest.md#tojsonstring)
- [equals](DebitNoteItemsSearchRequest.md#equals-1)
- [fromBinary](DebitNoteItemsSearchRequest.md#frombinary-1)
- [fromJson](DebitNoteItemsSearchRequest.md#fromjson-1)
- [fromJsonString](DebitNoteItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNoteItemsSearchRequest**(`data?`): [`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md)\> |

#### Returns

[`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md)

#### Overrides

Message\&lt;DebitNoteItemsSearchRequest\&gt;.constructor

#### Defined in

src/debit_notes.scailo_pb.ts:1427

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/debit_notes.scailo_pb.ts:1383

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/debit_notes.scailo_pb.ts:1376

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/debit_notes.scailo_pb.ts:1369

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/debit_notes.scailo_pb.ts:1390

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/debit_notes.scailo_pb.ts:1327

___

### debitNoteId

• **debitNoteId**: `bigint` = `protoInt64.zero`

The ID of the debit note

**`Generated`**

from field: uint64 debit_note_id = 20;

#### Defined in

src/debit_notes.scailo_pb.ts:1397

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/debit_notes.scailo_pb.ts:1355

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

src/debit_notes.scailo_pb.ts:1404

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/debit_notes.scailo_pb.ts:1320

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/debit_notes.scailo_pb.ts:1334

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/debit_notes.scailo_pb.ts:1425

___

### sortKey

• **sortKey**: [`DEBIT_NOTE_ITEM_SORT_KEY`](../enums/DEBIT_NOTE_ITEM_SORT_KEY.md) = `DEBIT_NOTE_ITEM_SORT_KEY.DEBIT_NOTE_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.DEBIT_NOTE_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/debit_notes.scailo_pb.ts:1348

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/debit_notes.scailo_pb.ts:1341

___

### status

• **status**: [`DEBIT_NOTE_ITEM_STATUS`](../enums/DEBIT_NOTE_ITEM_STATUS.md) = `DEBIT_NOTE_ITEM_STATUS.DEBIT_NOTE_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.DEBIT_NOTE_ITEM_STATUS status = 7;

#### Defined in

src/debit_notes.scailo_pb.ts:1362

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 27;

#### Defined in

src/debit_notes.scailo_pb.ts:1418

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

The ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 23;

#### Defined in

src/debit_notes.scailo_pb.ts:1411

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/debit_notes.scailo_pb.ts:1434

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/debit_notes.scailo_pb.ts:1432

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNoteItemsSearchRequest"``

#### Defined in

src/debit_notes.scailo_pb.ts:1433

## Methods

### clone

▸ **clone**(): [`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md) \| `PlainMessage`\<[`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md) \| `PlainMessage`\<[`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md) \| `PlainMessage`\<[`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/debit_notes.scailo_pb.ts:1465

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md)

#### Defined in

src/debit_notes.scailo_pb.ts:1453

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md)

#### Defined in

src/debit_notes.scailo_pb.ts:1457

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNoteItemsSearchRequest`](DebitNoteItemsSearchRequest.md)

#### Defined in

src/debit_notes.scailo_pb.ts:1461
