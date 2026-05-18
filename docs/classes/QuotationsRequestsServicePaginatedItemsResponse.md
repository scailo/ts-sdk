[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsServicePaginatedItemsResponse

# Class: QuotationsRequestsServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.QuotationsRequestsServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)\>

  ↳ **`QuotationsRequestsServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](QuotationsRequestsServicePaginatedItemsResponse.md#count)
- [offset](QuotationsRequestsServicePaginatedItemsResponse.md#offset)
- [payload](QuotationsRequestsServicePaginatedItemsResponse.md#payload)
- [total](QuotationsRequestsServicePaginatedItemsResponse.md#total)
- [fields](QuotationsRequestsServicePaginatedItemsResponse.md#fields)
- [runtime](QuotationsRequestsServicePaginatedItemsResponse.md#runtime)
- [typeName](QuotationsRequestsServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](QuotationsRequestsServicePaginatedItemsResponse.md#clone)
- [equals](QuotationsRequestsServicePaginatedItemsResponse.md#equals)
- [fromBinary](QuotationsRequestsServicePaginatedItemsResponse.md#frombinary)
- [fromJson](QuotationsRequestsServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](QuotationsRequestsServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](QuotationsRequestsServicePaginatedItemsResponse.md#gettype)
- [toBinary](QuotationsRequestsServicePaginatedItemsResponse.md#tobinary)
- [toJSON](QuotationsRequestsServicePaginatedItemsResponse.md#tojson)
- [toJson](QuotationsRequestsServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](QuotationsRequestsServicePaginatedItemsResponse.md#tojsonstring)
- [equals](QuotationsRequestsServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](QuotationsRequestsServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](QuotationsRequestsServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](QuotationsRequestsServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsServicePaginatedItemsResponse**(`data?`): [`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)\> |

#### Returns

[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;QuotationsRequestsServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

[src/quotations_requests.scailo_pb.ts:1609](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_requests.scailo_pb.ts#L1609)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1579](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_requests.scailo_pb.ts#L1579)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1589](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_requests.scailo_pb.ts#L1589)

___

### payload

• **payload**: [`QuotationRequestItem`](QuotationRequestItem.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.QuotationRequestItem payload = 4;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1607](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_requests.scailo_pb.ts#L1607)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1599](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_requests.scailo_pb.ts#L1599)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_requests.scailo_pb.ts:1616](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_requests.scailo_pb.ts#L1616)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_requests.scailo_pb.ts:1614](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_requests.scailo_pb.ts#L1614)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsRequestsServicePaginatedItemsResponse"``

#### Defined in

[src/quotations_requests.scailo_pb.ts:1615](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_requests.scailo_pb.ts#L1615)

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_requests.scailo_pb.ts:1635](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_requests.scailo_pb.ts#L1635)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

#### Defined in

[src/quotations_requests.scailo_pb.ts:1623](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_requests.scailo_pb.ts#L1623)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

#### Defined in

[src/quotations_requests.scailo_pb.ts:1627](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_requests.scailo_pb.ts#L1627)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

#### Defined in

[src/quotations_requests.scailo_pb.ts:1631](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_requests.scailo_pb.ts#L1631)
