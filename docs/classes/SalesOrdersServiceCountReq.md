[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersServiceCountReq

# Class: SalesOrdersServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.SalesOrdersServiceCountReq

## Hierarchy

- `Message`\<[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)\>

  ↳ **`SalesOrdersServiceCountReq`**

## Table of contents

### Constructors

- [constructor](SalesOrdersServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](SalesOrdersServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](SalesOrdersServiceCountReq.md#approvedonend)
- [approvedOnStart](SalesOrdersServiceCountReq.md#approvedonstart)
- [approverRoleId](SalesOrdersServiceCountReq.md#approverroleid)
- [buyerClientId](SalesOrdersServiceCountReq.md#buyerclientid)
- [completedOnEnd](SalesOrdersServiceCountReq.md#completedonend)
- [completedOnStart](SalesOrdersServiceCountReq.md#completedonstart)
- [consigneeClientId](SalesOrdersServiceCountReq.md#consigneeclientid)
- [creationTimestampEnd](SalesOrdersServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](SalesOrdersServiceCountReq.md#creationtimestampstart)
- [currencyId](SalesOrdersServiceCountReq.md#currencyid)
- [deliveryDateEnd](SalesOrdersServiceCountReq.md#deliverydateend)
- [deliveryDateExact](SalesOrdersServiceCountReq.md#deliverydateexact)
- [deliveryDateStart](SalesOrdersServiceCountReq.md#deliverydatestart)
- [entityUuid](SalesOrdersServiceCountReq.md#entityuuid)
- [familyId](SalesOrdersServiceCountReq.md#familyid)
- [finalRefNumber](SalesOrdersServiceCountReq.md#finalrefnumber)
- [isActive](SalesOrdersServiceCountReq.md#isactive)
- [locationId](SalesOrdersServiceCountReq.md#locationid)
- [modificationTimestampEnd](SalesOrdersServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](SalesOrdersServiceCountReq.md#modificationtimestampstart)
- [projectId](SalesOrdersServiceCountReq.md#projectid)
- [referenceId](SalesOrdersServiceCountReq.md#referenceid)
- [status](SalesOrdersServiceCountReq.md#status)
- [totalValueMax](SalesOrdersServiceCountReq.md#totalvaluemax)
- [totalValueMin](SalesOrdersServiceCountReq.md#totalvaluemin)
- [fields](SalesOrdersServiceCountReq.md#fields)
- [runtime](SalesOrdersServiceCountReq.md#runtime)
- [typeName](SalesOrdersServiceCountReq.md#typename)

### Methods

- [clone](SalesOrdersServiceCountReq.md#clone)
- [equals](SalesOrdersServiceCountReq.md#equals)
- [fromBinary](SalesOrdersServiceCountReq.md#frombinary)
- [fromJson](SalesOrdersServiceCountReq.md#fromjson)
- [fromJsonString](SalesOrdersServiceCountReq.md#fromjsonstring)
- [getType](SalesOrdersServiceCountReq.md#gettype)
- [toBinary](SalesOrdersServiceCountReq.md#tobinary)
- [toJSON](SalesOrdersServiceCountReq.md#tojson)
- [toJson](SalesOrdersServiceCountReq.md#tojson-1)
- [toJsonString](SalesOrdersServiceCountReq.md#tojsonstring)
- [equals](SalesOrdersServiceCountReq.md#equals-1)
- [fromBinary](SalesOrdersServiceCountReq.md#frombinary-1)
- [fromJson](SalesOrdersServiceCountReq.md#fromjson-1)
- [fromJsonString](SalesOrdersServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersServiceCountReq**(`data?`): [`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)\> |

#### Returns

[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

#### Overrides

Message\&lt;SalesOrdersServiceCountReq\&gt;.constructor

#### Defined in

src/sales_orders.scailo_pb.ts:2293

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/sales_orders.scailo_pb.ts:2179

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/sales_orders.scailo_pb.ts:2172

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/sales_orders.scailo_pb.ts:2165

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/sales_orders.scailo_pb.ts:2186

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID

**`Generated`**

from field: uint64 buyer_client_id = 23;

#### Defined in

src/sales_orders.scailo_pb.ts:2228

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/sales_orders.scailo_pb.ts:2200

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/sales_orders.scailo_pb.ts:2193

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The associated consignee client ID

**`Generated`**

from field: uint64 consignee_client_id = 22;

#### Defined in

src/sales_orders.scailo_pb.ts:2221

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/sales_orders.scailo_pb.ts:2130

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/sales_orders.scailo_pb.ts:2123

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

src/sales_orders.scailo_pb.ts:2242

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the sales order

**`Generated`**

from field: string delivery_date_end = 43;

#### Defined in

src/sales_orders.scailo_pb.ts:2277

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the sales order

**`Generated`**

from field: string delivery_date_exact = 41;

#### Defined in

src/sales_orders.scailo_pb.ts:2263

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the sales order

**`Generated`**

from field: string delivery_date_start = 42;

#### Defined in

src/sales_orders.scailo_pb.ts:2270

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/sales_orders.scailo_pb.ts:2151

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

src/sales_orders.scailo_pb.ts:2256

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/sales_orders.scailo_pb.ts:2214

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/sales_orders.scailo_pb.ts:2116

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the associated location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

src/sales_orders.scailo_pb.ts:2235

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/sales_orders.scailo_pb.ts:2144

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/sales_orders.scailo_pb.ts:2137

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

src/sales_orders.scailo_pb.ts:2249

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales order

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/sales_orders.scailo_pb.ts:2207

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this sales order

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/sales_orders.scailo_pb.ts:2158

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the sales order (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 51;

#### Defined in

src/sales_orders.scailo_pb.ts:2291

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the sales order (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 50;

#### Defined in

src/sales_orders.scailo_pb.ts:2284

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_orders.scailo_pb.ts:2300

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_orders.scailo_pb.ts:2298

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersServiceCountReq"``

#### Defined in

src/sales_orders.scailo_pb.ts:2299

## Methods

### clone

▸ **clone**(): [`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

Create a deep copy.

#### Returns

[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md) \| `PlainMessage`\<[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)\>

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
| `a` | `undefined` \| [`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md) \| `PlainMessage`\<[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)\> |
| `b` | `undefined` \| [`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md) \| `PlainMessage`\<[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_orders.scailo_pb.ts:2341

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

#### Defined in

src/sales_orders.scailo_pb.ts:2329

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

#### Defined in

src/sales_orders.scailo_pb.ts:2333

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceCountReq`](SalesOrdersServiceCountReq.md)

#### Defined in

src/sales_orders.scailo_pb.ts:2337
