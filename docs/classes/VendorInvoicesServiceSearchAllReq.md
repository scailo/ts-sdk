[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoicesServiceSearchAllReq

# Class: VendorInvoicesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.VendorInvoicesServiceSearchAllReq

## Hierarchy

- `Message`\<[`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md)\>

  ↳ **`VendorInvoicesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](VendorInvoicesServiceSearchAllReq.md#constructor)

### Properties

- [count](VendorInvoicesServiceSearchAllReq.md#count)
- [entityUuid](VendorInvoicesServiceSearchAllReq.md#entityuuid)
- [isActive](VendorInvoicesServiceSearchAllReq.md#isactive)
- [offset](VendorInvoicesServiceSearchAllReq.md#offset)
- [refFrom](VendorInvoicesServiceSearchAllReq.md#reffrom)
- [refId](VendorInvoicesServiceSearchAllReq.md#refid)
- [searchKey](VendorInvoicesServiceSearchAllReq.md#searchkey)
- [sortKey](VendorInvoicesServiceSearchAllReq.md#sortkey)
- [sortOrder](VendorInvoicesServiceSearchAllReq.md#sortorder)
- [status](VendorInvoicesServiceSearchAllReq.md#status)
- [vendorId](VendorInvoicesServiceSearchAllReq.md#vendorid)
- [fields](VendorInvoicesServiceSearchAllReq.md#fields)
- [runtime](VendorInvoicesServiceSearchAllReq.md#runtime)
- [typeName](VendorInvoicesServiceSearchAllReq.md#typename)

### Methods

- [clone](VendorInvoicesServiceSearchAllReq.md#clone)
- [equals](VendorInvoicesServiceSearchAllReq.md#equals)
- [fromBinary](VendorInvoicesServiceSearchAllReq.md#frombinary)
- [fromJson](VendorInvoicesServiceSearchAllReq.md#fromjson)
- [fromJsonString](VendorInvoicesServiceSearchAllReq.md#fromjsonstring)
- [getType](VendorInvoicesServiceSearchAllReq.md#gettype)
- [toBinary](VendorInvoicesServiceSearchAllReq.md#tobinary)
- [toJSON](VendorInvoicesServiceSearchAllReq.md#tojson)
- [toJson](VendorInvoicesServiceSearchAllReq.md#tojson-1)
- [toJsonString](VendorInvoicesServiceSearchAllReq.md#tojsonstring)
- [equals](VendorInvoicesServiceSearchAllReq.md#equals-1)
- [fromBinary](VendorInvoicesServiceSearchAllReq.md#frombinary-1)
- [fromJson](VendorInvoicesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](VendorInvoicesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoicesServiceSearchAllReq**(`data?`): [`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md)\> |

#### Returns

[`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md)

#### Overrides

Message\&lt;VendorInvoicesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2296](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2296)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2231](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2231)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2259](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2259)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2224](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2224)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2238](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2238)

___

### refFrom

• **refFrom**: [`VENDOR_INVOICE_REF_FROM`](../enums/VENDOR_INVOICE_REF_FROM.md) = `VENDOR_INVOICE_REF_FROM.VENDOR_INVOICE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.VENDOR_INVOICE_REF_FROM ref_from = 22;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2280](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2280)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2287](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2287)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2273](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2273)

___

### sortKey

• **sortKey**: [`VENDOR_INVOICE_SORT_KEY`](../enums/VENDOR_INVOICE_SORT_KEY.md) = `VENDOR_INVOICE_SORT_KEY.VENDOR_INVOICE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.VENDOR_INVOICE_SORT_KEY sort_key = 5;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2252](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2252)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2245](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2245)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2266](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2266)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 25;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2294](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2294)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2303](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2303)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2301](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2301)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoicesServiceSearchAllReq"``

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2302](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2302)

## Methods

### clone

▸ **clone**(): [`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md) \| `PlainMessage`\<[`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md) \| `PlainMessage`\<[`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md) \| `PlainMessage`\<[`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2329](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2329)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2317](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2317)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2321](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2321)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceSearchAllReq`](VendorInvoicesServiceSearchAllReq.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2325](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2325)
