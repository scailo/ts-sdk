[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorsServiceSearchAllReq

# Class: VendorsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.VendorsServiceSearchAllReq

## Hierarchy

- `Message`\<[`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md)\>

  ↳ **`VendorsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](VendorsServiceSearchAllReq.md#constructor)

### Properties

- [count](VendorsServiceSearchAllReq.md#count)
- [entityUuid](VendorsServiceSearchAllReq.md#entityuuid)
- [isActive](VendorsServiceSearchAllReq.md#isactive)
- [offset](VendorsServiceSearchAllReq.md#offset)
- [searchKey](VendorsServiceSearchAllReq.md#searchkey)
- [sortKey](VendorsServiceSearchAllReq.md#sortkey)
- [sortOrder](VendorsServiceSearchAllReq.md#sortorder)
- [status](VendorsServiceSearchAllReq.md#status)
- [fields](VendorsServiceSearchAllReq.md#fields)
- [runtime](VendorsServiceSearchAllReq.md#runtime)
- [typeName](VendorsServiceSearchAllReq.md#typename)

### Methods

- [clone](VendorsServiceSearchAllReq.md#clone)
- [equals](VendorsServiceSearchAllReq.md#equals)
- [fromBinary](VendorsServiceSearchAllReq.md#frombinary)
- [fromJson](VendorsServiceSearchAllReq.md#fromjson)
- [fromJsonString](VendorsServiceSearchAllReq.md#fromjsonstring)
- [getType](VendorsServiceSearchAllReq.md#gettype)
- [toBinary](VendorsServiceSearchAllReq.md#tobinary)
- [toJSON](VendorsServiceSearchAllReq.md#tojson)
- [toJson](VendorsServiceSearchAllReq.md#tojson-1)
- [toJsonString](VendorsServiceSearchAllReq.md#tojsonstring)
- [equals](VendorsServiceSearchAllReq.md#equals-1)
- [fromBinary](VendorsServiceSearchAllReq.md#frombinary-1)
- [fromJson](VendorsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](VendorsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorsServiceSearchAllReq**(`data?`): [`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md)\> |

#### Returns

[`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md)

#### Overrides

Message\&lt;VendorsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/vendors.scailo_pb.ts:1843](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1843)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/vendors.scailo_pb.ts:1799](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1799)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/vendors.scailo_pb.ts:1827](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1827)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/vendors.scailo_pb.ts:1792](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1792)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/vendors.scailo_pb.ts:1806](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1806)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/vendors.scailo_pb.ts:1841](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1841)

___

### sortKey

• **sortKey**: [`VENDOR_SORT_KEY`](../enums/VENDOR_SORT_KEY.md) = `VENDOR_SORT_KEY.VENDOR_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.VENDOR_SORT_KEY sort_key = 5;

#### Defined in

[src/vendors.scailo_pb.ts:1820](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1820)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/vendors.scailo_pb.ts:1813](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1813)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/vendors.scailo_pb.ts:1834](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1834)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:1850](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1850)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:1848](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1848)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorsServiceSearchAllReq"``

#### Defined in

[src/vendors.scailo_pb.ts:1849](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1849)

## Methods

### clone

▸ **clone**(): [`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md) \| `PlainMessage`\<[`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md) \| `PlainMessage`\<[`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md) \| `PlainMessage`\<[`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendors.scailo_pb.ts:1873](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1873)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md)

#### Defined in

[src/vendors.scailo_pb.ts:1861](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1861)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md)

#### Defined in

[src/vendors.scailo_pb.ts:1865](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1865)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServiceSearchAllReq`](VendorsServiceSearchAllReq.md)

#### Defined in

[src/vendors.scailo_pb.ts:1869](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1869)
