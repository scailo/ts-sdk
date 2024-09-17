[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersServiceSearchAllReq

# Class: SalesOrdersServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.SalesOrdersServiceSearchAllReq

## Hierarchy

- `Message`\<[`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md)\>

  ↳ **`SalesOrdersServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](SalesOrdersServiceSearchAllReq.md#constructor)

### Properties

- [buyerClientId](SalesOrdersServiceSearchAllReq.md#buyerclientid)
- [consigneeClientId](SalesOrdersServiceSearchAllReq.md#consigneeclientid)
- [count](SalesOrdersServiceSearchAllReq.md#count)
- [currencyId](SalesOrdersServiceSearchAllReq.md#currencyid)
- [entityUuid](SalesOrdersServiceSearchAllReq.md#entityuuid)
- [isActive](SalesOrdersServiceSearchAllReq.md#isactive)
- [locationId](SalesOrdersServiceSearchAllReq.md#locationid)
- [offset](SalesOrdersServiceSearchAllReq.md#offset)
- [projectId](SalesOrdersServiceSearchAllReq.md#projectid)
- [searchKey](SalesOrdersServiceSearchAllReq.md#searchkey)
- [sortKey](SalesOrdersServiceSearchAllReq.md#sortkey)
- [sortOrder](SalesOrdersServiceSearchAllReq.md#sortorder)
- [status](SalesOrdersServiceSearchAllReq.md#status)
- [fields](SalesOrdersServiceSearchAllReq.md#fields)
- [runtime](SalesOrdersServiceSearchAllReq.md#runtime)
- [typeName](SalesOrdersServiceSearchAllReq.md#typename)

### Methods

- [clone](SalesOrdersServiceSearchAllReq.md#clone)
- [equals](SalesOrdersServiceSearchAllReq.md#equals)
- [fromBinary](SalesOrdersServiceSearchAllReq.md#frombinary)
- [fromJson](SalesOrdersServiceSearchAllReq.md#fromjson)
- [fromJsonString](SalesOrdersServiceSearchAllReq.md#fromjsonstring)
- [getType](SalesOrdersServiceSearchAllReq.md#gettype)
- [toBinary](SalesOrdersServiceSearchAllReq.md#tobinary)
- [toJSON](SalesOrdersServiceSearchAllReq.md#tojson)
- [toJson](SalesOrdersServiceSearchAllReq.md#tojson-1)
- [toJsonString](SalesOrdersServiceSearchAllReq.md#tojsonstring)
- [equals](SalesOrdersServiceSearchAllReq.md#equals-1)
- [fromBinary](SalesOrdersServiceSearchAllReq.md#frombinary-1)
- [fromJson](SalesOrdersServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](SalesOrdersServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersServiceSearchAllReq**(`data?`): [`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md)\> |

#### Returns

[`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md)

#### Overrides

Message\&lt;SalesOrdersServiceSearchAllReq\&gt;.constructor

#### Defined in

src/sales_orders.scailo_pb.ts:2378

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID

**`Generated`**

from field: uint64 buyer_client_id = 23;

#### Defined in

src/sales_orders.scailo_pb.ts:2355

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The associated consignee client ID

**`Generated`**

from field: uint64 consignee_client_id = 22;

#### Defined in

src/sales_orders.scailo_pb.ts:2348

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/sales_orders.scailo_pb.ts:2299

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

src/sales_orders.scailo_pb.ts:2369

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/sales_orders.scailo_pb.ts:2327

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/sales_orders.scailo_pb.ts:2292

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the associated location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

src/sales_orders.scailo_pb.ts:2362

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/sales_orders.scailo_pb.ts:2306

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

src/sales_orders.scailo_pb.ts:2376

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/sales_orders.scailo_pb.ts:2341

___

### sortKey

• **sortKey**: [`SALES_ORDER_SORT_KEY`](../enums/SALES_ORDER_SORT_KEY.md) = `SALES_ORDER_SORT_KEY.SALES_ORDER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SALES_ORDER_SORT_KEY sort_key = 5;

#### Defined in

src/sales_orders.scailo_pb.ts:2320

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/sales_orders.scailo_pb.ts:2313

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/sales_orders.scailo_pb.ts:2334

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_orders.scailo_pb.ts:2385

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_orders.scailo_pb.ts:2383

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersServiceSearchAllReq"``

#### Defined in

src/sales_orders.scailo_pb.ts:2384

## Methods

### clone

▸ **clone**(): [`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_orders.scailo_pb.ts:2413

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md)

#### Defined in

src/sales_orders.scailo_pb.ts:2401

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md)

#### Defined in

src/sales_orders.scailo_pb.ts:2405

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceSearchAllReq`](SalesOrdersServiceSearchAllReq.md)

#### Defined in

src/sales_orders.scailo_pb.ts:2409
