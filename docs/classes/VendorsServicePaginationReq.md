[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorsServicePaginationReq

# Class: VendorsServicePaginationReq

Pagination request for retrieving slices of Vendor records.

**`Generated`**

from message Scailo.VendorsServicePaginationReq

## Hierarchy

- `Message`\<[`VendorsServicePaginationReq`](VendorsServicePaginationReq.md)\>

  ↳ **`VendorsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](VendorsServicePaginationReq.md#constructor)

### Properties

- [count](VendorsServicePaginationReq.md#count)
- [isActive](VendorsServicePaginationReq.md#isactive)
- [offset](VendorsServicePaginationReq.md#offset)
- [sortKey](VendorsServicePaginationReq.md#sortkey)
- [sortOrder](VendorsServicePaginationReq.md#sortorder)
- [status](VendorsServicePaginationReq.md#status)
- [fields](VendorsServicePaginationReq.md#fields)
- [runtime](VendorsServicePaginationReq.md#runtime)
- [typeName](VendorsServicePaginationReq.md#typename)

### Methods

- [clone](VendorsServicePaginationReq.md#clone)
- [equals](VendorsServicePaginationReq.md#equals)
- [fromBinary](VendorsServicePaginationReq.md#frombinary)
- [fromJson](VendorsServicePaginationReq.md#fromjson)
- [fromJsonString](VendorsServicePaginationReq.md#fromjsonstring)
- [getType](VendorsServicePaginationReq.md#gettype)
- [toBinary](VendorsServicePaginationReq.md#tobinary)
- [toJSON](VendorsServicePaginationReq.md#tojson)
- [toJson](VendorsServicePaginationReq.md#tojson-1)
- [toJsonString](VendorsServicePaginationReq.md#tojsonstring)
- [equals](VendorsServicePaginationReq.md#equals-1)
- [fromBinary](VendorsServicePaginationReq.md#frombinary-1)
- [fromJson](VendorsServicePaginationReq.md#fromjson-1)
- [fromJsonString](VendorsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorsServicePaginationReq**(`data?`): [`VendorsServicePaginationReq`](VendorsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorsServicePaginationReq`](VendorsServicePaginationReq.md)\> |

#### Returns

[`VendorsServicePaginationReq`](VendorsServicePaginationReq.md)

#### Overrides

Message\&lt;VendorsServicePaginationReq\&gt;.constructor

#### Defined in

[src/vendors.scailo_pb.ts:1852](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1852)

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

[src/vendors.scailo_pb.ts:1800](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1800)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/vendors.scailo_pb.ts:1784](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1784)

___

### offset

• `Optional` **offset**: `bigint`

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

from field: optional uint64 offset = 3;

#### Defined in

[src/vendors.scailo_pb.ts:1816](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1816)

___

### sortKey

• `Optional` **sortKey**: [`VENDOR_SORT_KEY`](../enums/VENDOR_SORT_KEY.md)

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: optional Scailo.VENDOR_SORT_KEY sort_key = 5;

#### Defined in

[src/vendors.scailo_pb.ts:1838](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1838)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/vendors.scailo_pb.ts:1828](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1828)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter results by a specific lifecycle status.

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/vendors.scailo_pb.ts:1850](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1850)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:1859](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1859)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:1857](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1857)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorsServicePaginationReq"``

#### Defined in

[src/vendors.scailo_pb.ts:1858](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1858)

## Methods

### clone

▸ **clone**(): [`VendorsServicePaginationReq`](VendorsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`VendorsServicePaginationReq`](VendorsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorsServicePaginationReq`](VendorsServicePaginationReq.md) \| `PlainMessage`\<[`VendorsServicePaginationReq`](VendorsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorsServicePaginationReq`](VendorsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorsServicePaginationReq`](VendorsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`VendorsServicePaginationReq`](VendorsServicePaginationReq.md) \| `PlainMessage`\<[`VendorsServicePaginationReq`](VendorsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`VendorsServicePaginationReq`](VendorsServicePaginationReq.md) \| `PlainMessage`\<[`VendorsServicePaginationReq`](VendorsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendors.scailo_pb.ts:1880](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1880)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorsServicePaginationReq`](VendorsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorsServicePaginationReq`](VendorsServicePaginationReq.md)

#### Defined in

[src/vendors.scailo_pb.ts:1868](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1868)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorsServicePaginationReq`](VendorsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServicePaginationReq`](VendorsServicePaginationReq.md)

#### Defined in

[src/vendors.scailo_pb.ts:1872](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1872)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorsServicePaginationReq`](VendorsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServicePaginationReq`](VendorsServicePaginationReq.md)

#### Defined in

[src/vendors.scailo_pb.ts:1876](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1876)
