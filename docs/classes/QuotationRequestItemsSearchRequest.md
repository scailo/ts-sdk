[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationRequestItemsSearchRequest

# Class: QuotationRequestItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.QuotationRequestItemsSearchRequest

## Hierarchy

- `Message`\<[`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md)\>

  ↳ **`QuotationRequestItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](QuotationRequestItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](QuotationRequestItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](QuotationRequestItemsSearchRequest.md#approvedonend)
- [approvedOnStart](QuotationRequestItemsSearchRequest.md#approvedonstart)
- [approverRoleId](QuotationRequestItemsSearchRequest.md#approverroleid)
- [count](QuotationRequestItemsSearchRequest.md#count)
- [deliveryDateEnd](QuotationRequestItemsSearchRequest.md#deliverydateend)
- [deliveryDateExact](QuotationRequestItemsSearchRequest.md#deliverydateexact)
- [deliveryDateStart](QuotationRequestItemsSearchRequest.md#deliverydatestart)
- [entityUuid](QuotationRequestItemsSearchRequest.md#entityuuid)
- [isActive](QuotationRequestItemsSearchRequest.md#isactive)
- [offset](QuotationRequestItemsSearchRequest.md#offset)
- [quotationRequestId](QuotationRequestItemsSearchRequest.md#quotationrequestid)
- [searchKey](QuotationRequestItemsSearchRequest.md#searchkey)
- [sortKey](QuotationRequestItemsSearchRequest.md#sortkey)
- [sortOrder](QuotationRequestItemsSearchRequest.md#sortorder)
- [status](QuotationRequestItemsSearchRequest.md#status)
- [uomId](QuotationRequestItemsSearchRequest.md#uomid)
- [fields](QuotationRequestItemsSearchRequest.md#fields)
- [runtime](QuotationRequestItemsSearchRequest.md#runtime)
- [typeName](QuotationRequestItemsSearchRequest.md#typename)

### Methods

- [clone](QuotationRequestItemsSearchRequest.md#clone)
- [equals](QuotationRequestItemsSearchRequest.md#equals)
- [fromBinary](QuotationRequestItemsSearchRequest.md#frombinary)
- [fromJson](QuotationRequestItemsSearchRequest.md#fromjson)
- [fromJsonString](QuotationRequestItemsSearchRequest.md#fromjsonstring)
- [getType](QuotationRequestItemsSearchRequest.md#gettype)
- [toBinary](QuotationRequestItemsSearchRequest.md#tobinary)
- [toJSON](QuotationRequestItemsSearchRequest.md#tojson)
- [toJson](QuotationRequestItemsSearchRequest.md#tojson-1)
- [toJsonString](QuotationRequestItemsSearchRequest.md#tojsonstring)
- [equals](QuotationRequestItemsSearchRequest.md#equals-1)
- [fromBinary](QuotationRequestItemsSearchRequest.md#frombinary-1)
- [fromJson](QuotationRequestItemsSearchRequest.md#fromjson-1)
- [fromJsonString](QuotationRequestItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationRequestItemsSearchRequest**(`data?`): [`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md)\> |

#### Returns

[`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md)

#### Overrides

Message\&lt;QuotationRequestItemsSearchRequest\&gt;.constructor

#### Defined in

[src/quotations_requests.scailo_pb.ts:1384](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1384)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1333](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1333)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1326](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1326)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1319](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1319)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1340](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1340)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1277](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1277)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the purchase indent

**`Generated`**

from field: string delivery_date_end = 30;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1375](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1375)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the purchase indent

**`Generated`**

from field: string delivery_date_exact = 28;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1361](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1361)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the purchase indent

**`Generated`**

from field: string delivery_date_start = 29;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1368](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1368)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1305](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1305)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1270](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1270)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1284](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1284)

___

### quotationRequestId

• **quotationRequestId**: `bigint` = `protoInt64.zero`

Stores the quotation request ID

**`Generated`**

from field: uint64 quotation_request_id = 20;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1347](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1347)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1382](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1382)

___

### sortKey

• **sortKey**: [`QUOTATION_REQUEST_ITEM_SORT_KEY`](../enums/QUOTATION_REQUEST_ITEM_SORT_KEY.md) = `QUOTATION_REQUEST_ITEM_SORT_KEY.QUOTATION_REQUEST_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.QUOTATION_REQUEST_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1298](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1298)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1291](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1291)

___

### status

• **status**: [`QUOTATION_REQUEST_ITEM_STATUS`](../enums/QUOTATION_REQUEST_ITEM_STATUS.md) = `QUOTATION_REQUEST_ITEM_STATUS.QUOTATION_REQUEST_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.QUOTATION_REQUEST_ITEM_STATUS status = 7;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1312](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1312)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores an optional unit of material

**`Generated`**

from field: uint64 uom_id = 21;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1354](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1354)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_requests.scailo_pb.ts:1391](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1391)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_requests.scailo_pb.ts:1389](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1389)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationRequestItemsSearchRequest"``

#### Defined in

[src/quotations_requests.scailo_pb.ts:1390](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1390)

## Methods

### clone

▸ **clone**(): [`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md) \| `PlainMessage`\<[`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md) \| `PlainMessage`\<[`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md) \| `PlainMessage`\<[`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_requests.scailo_pb.ts:1423](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1423)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md)

#### Defined in

[src/quotations_requests.scailo_pb.ts:1411](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1411)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md)

#### Defined in

[src/quotations_requests.scailo_pb.ts:1415](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1415)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationRequestItemsSearchRequest`](QuotationRequestItemsSearchRequest.md)

#### Defined in

[src/quotations_requests.scailo_pb.ts:1419](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/quotations_requests.scailo_pb.ts#L1419)
