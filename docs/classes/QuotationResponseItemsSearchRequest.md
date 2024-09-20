[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationResponseItemsSearchRequest

# Class: QuotationResponseItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.QuotationResponseItemsSearchRequest

## Hierarchy

- `Message`\<[`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md)\>

  ↳ **`QuotationResponseItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](QuotationResponseItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](QuotationResponseItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](QuotationResponseItemsSearchRequest.md#approvedonend)
- [approvedOnStart](QuotationResponseItemsSearchRequest.md#approvedonstart)
- [approverRoleId](QuotationResponseItemsSearchRequest.md#approverroleid)
- [count](QuotationResponseItemsSearchRequest.md#count)
- [entityUuid](QuotationResponseItemsSearchRequest.md#entityuuid)
- [isActive](QuotationResponseItemsSearchRequest.md#isactive)
- [offset](QuotationResponseItemsSearchRequest.md#offset)
- [quotationRequestItemId](QuotationResponseItemsSearchRequest.md#quotationrequestitemid)
- [quotationResponseId](QuotationResponseItemsSearchRequest.md#quotationresponseid)
- [searchKey](QuotationResponseItemsSearchRequest.md#searchkey)
- [sortKey](QuotationResponseItemsSearchRequest.md#sortkey)
- [sortOrder](QuotationResponseItemsSearchRequest.md#sortorder)
- [status](QuotationResponseItemsSearchRequest.md#status)
- [taxGroupId](QuotationResponseItemsSearchRequest.md#taxgroupid)
- [uomId](QuotationResponseItemsSearchRequest.md#uomid)
- [vendorUomId](QuotationResponseItemsSearchRequest.md#vendoruomid)
- [fields](QuotationResponseItemsSearchRequest.md#fields)
- [runtime](QuotationResponseItemsSearchRequest.md#runtime)
- [typeName](QuotationResponseItemsSearchRequest.md#typename)

### Methods

- [clone](QuotationResponseItemsSearchRequest.md#clone)
- [equals](QuotationResponseItemsSearchRequest.md#equals)
- [fromBinary](QuotationResponseItemsSearchRequest.md#frombinary)
- [fromJson](QuotationResponseItemsSearchRequest.md#fromjson)
- [fromJsonString](QuotationResponseItemsSearchRequest.md#fromjsonstring)
- [getType](QuotationResponseItemsSearchRequest.md#gettype)
- [toBinary](QuotationResponseItemsSearchRequest.md#tobinary)
- [toJSON](QuotationResponseItemsSearchRequest.md#tojson)
- [toJson](QuotationResponseItemsSearchRequest.md#tojson-1)
- [toJsonString](QuotationResponseItemsSearchRequest.md#tojsonstring)
- [equals](QuotationResponseItemsSearchRequest.md#equals-1)
- [fromBinary](QuotationResponseItemsSearchRequest.md#frombinary-1)
- [fromJson](QuotationResponseItemsSearchRequest.md#fromjson-1)
- [fromJsonString](QuotationResponseItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationResponseItemsSearchRequest**(`data?`): [`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md)\> |

#### Returns

[`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md)

#### Overrides

Message\&lt;QuotationResponseItemsSearchRequest\&gt;.constructor

#### Defined in

src/quotations_responses.scailo_pb.ts:1374

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/quotations_responses.scailo_pb.ts:1323

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/quotations_responses.scailo_pb.ts:1316

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/quotations_responses.scailo_pb.ts:1309

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/quotations_responses.scailo_pb.ts:1330

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/quotations_responses.scailo_pb.ts:1267

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/quotations_responses.scailo_pb.ts:1295

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/quotations_responses.scailo_pb.ts:1260

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/quotations_responses.scailo_pb.ts:1274

___

### quotationRequestItemId

• **quotationRequestItemId**: `bigint` = `protoInt64.zero`

Stores the corresponding item ID of the item from the quotation request

**`Generated`**

from field: uint64 quotation_request_item_id = 21;

#### Defined in

src/quotations_responses.scailo_pb.ts:1344

___

### quotationResponseId

• **quotationResponseId**: `bigint` = `protoInt64.zero`

Stores the quotation response ID

**`Generated`**

from field: uint64 quotation_response_id = 20;

#### Defined in

src/quotations_responses.scailo_pb.ts:1337

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/quotations_responses.scailo_pb.ts:1372

___

### sortKey

• **sortKey**: [`QUOTATION_RESPONSE_ITEM_SORT_KEY`](../enums/QUOTATION_RESPONSE_ITEM_SORT_KEY.md) = `QUOTATION_RESPONSE_ITEM_SORT_KEY.QUOTATION_RESPONSE_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.QUOTATION_RESPONSE_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/quotations_responses.scailo_pb.ts:1288

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/quotations_responses.scailo_pb.ts:1281

___

### status

• **status**: [`QUOTATION_RESPONSE_ITEM_STATUS`](../enums/QUOTATION_RESPONSE_ITEM_STATUS.md) = `QUOTATION_RESPONSE_ITEM_STATUS.QUOTATION_RESPONSE_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.QUOTATION_RESPONSE_ITEM_STATUS status = 7;

#### Defined in

src/quotations_responses.scailo_pb.ts:1302

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

Stores an optional tax group ID

**`Generated`**

from field: uint64 tax_group_id = 29;

#### Defined in

src/quotations_responses.scailo_pb.ts:1365

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores an optional unit of material ID

**`Generated`**

from field: uint64 uom_id = 24;

#### Defined in

src/quotations_responses.scailo_pb.ts:1351

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores an optional vendor unit of material ID

**`Generated`**

from field: uint64 vendor_uom_id = 26;

#### Defined in

src/quotations_responses.scailo_pb.ts:1358

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/quotations_responses.scailo_pb.ts:1381

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/quotations_responses.scailo_pb.ts:1379

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationResponseItemsSearchRequest"``

#### Defined in

src/quotations_responses.scailo_pb.ts:1380

## Methods

### clone

▸ **clone**(): [`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md) \| `PlainMessage`\<[`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md) \| `PlainMessage`\<[`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md) \| `PlainMessage`\<[`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/quotations_responses.scailo_pb.ts:1413

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:1401

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:1405

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationResponseItemsSearchRequest`](QuotationResponseItemsSearchRequest.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:1409
