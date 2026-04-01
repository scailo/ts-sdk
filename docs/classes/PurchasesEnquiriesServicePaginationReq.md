[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesEnquiriesServicePaginationReq

# Class: PurchasesEnquiriesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.PurchasesEnquiriesServicePaginationReq

## Hierarchy

- `Message`\<[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)\>

  ↳ **`PurchasesEnquiriesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](PurchasesEnquiriesServicePaginationReq.md#constructor)

### Properties

- [count](PurchasesEnquiriesServicePaginationReq.md#count)
- [isActive](PurchasesEnquiriesServicePaginationReq.md#isactive)
- [offset](PurchasesEnquiriesServicePaginationReq.md#offset)
- [sortKey](PurchasesEnquiriesServicePaginationReq.md#sortkey)
- [sortOrder](PurchasesEnquiriesServicePaginationReq.md#sortorder)
- [status](PurchasesEnquiriesServicePaginationReq.md#status)
- [fields](PurchasesEnquiriesServicePaginationReq.md#fields)
- [runtime](PurchasesEnquiriesServicePaginationReq.md#runtime)
- [typeName](PurchasesEnquiriesServicePaginationReq.md#typename)

### Methods

- [clone](PurchasesEnquiriesServicePaginationReq.md#clone)
- [equals](PurchasesEnquiriesServicePaginationReq.md#equals)
- [fromBinary](PurchasesEnquiriesServicePaginationReq.md#frombinary)
- [fromJson](PurchasesEnquiriesServicePaginationReq.md#fromjson)
- [fromJsonString](PurchasesEnquiriesServicePaginationReq.md#fromjsonstring)
- [getType](PurchasesEnquiriesServicePaginationReq.md#gettype)
- [toBinary](PurchasesEnquiriesServicePaginationReq.md#tobinary)
- [toJSON](PurchasesEnquiriesServicePaginationReq.md#tojson)
- [toJson](PurchasesEnquiriesServicePaginationReq.md#tojson-1)
- [toJsonString](PurchasesEnquiriesServicePaginationReq.md#tojsonstring)
- [equals](PurchasesEnquiriesServicePaginationReq.md#equals-1)
- [fromBinary](PurchasesEnquiriesServicePaginationReq.md#frombinary-1)
- [fromJson](PurchasesEnquiriesServicePaginationReq.md#fromjson-1)
- [fromJsonString](PurchasesEnquiriesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesEnquiriesServicePaginationReq**(`data?`): [`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)\> |

#### Returns

[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

#### Overrides

Message\&lt;PurchasesEnquiriesServicePaginationReq\&gt;.constructor

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1423](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1423)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to return per page.

**`Example`**

```ts
50
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1376](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1376)

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

[src/purchases_enquiries.scailo_pb.ts:1360](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1360)

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

[src/purchases_enquiries.scailo_pb.ts:1392](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1392)

___

### sortKey

• **sortKey**: [`PURCHASE_ENQUIRY_SORT_KEY`](../enums/PURCHASE_ENQUIRY_SORT_KEY.md) = `PURCHASE_ENQUIRY_SORT_KEY.PURCHASE_ENQUIRY_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.PURCHASE_ENQUIRY_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1414](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1414)

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

[src/purchases_enquiries.scailo_pb.ts:1404](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1404)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this purchase enquiry

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1421](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1421)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1430](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1430)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1428](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1428)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesEnquiriesServicePaginationReq"``

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1429](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1429)

## Methods

### clone

▸ **clone**(): [`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md) \| `PlainMessage`\<[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md) \| `PlainMessage`\<[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md) \| `PlainMessage`\<[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1451](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1451)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1439](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1439)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1443](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1443)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServicePaginationReq`](PurchasesEnquiriesServicePaginationReq.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1447](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1447)
