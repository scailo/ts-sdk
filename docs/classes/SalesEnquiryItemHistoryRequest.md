[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiryItemHistoryRequest

# Class: SalesEnquiryItemHistoryRequest

Represents the request payload containing the parameter constraints required to
retrieve the historical audit trail and lifecycle changes of a specific sales enquiry item record.

**`Generated`**

from message Scailo.SalesEnquiryItemHistoryRequest

## Hierarchy

- `Message`\<[`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md)\>

  ↳ **`SalesEnquiryItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](SalesEnquiryItemHistoryRequest.md#constructor)

### Properties

- [name](SalesEnquiryItemHistoryRequest.md#name)
- [salesEnquiryId](SalesEnquiryItemHistoryRequest.md#salesenquiryid)
- [fields](SalesEnquiryItemHistoryRequest.md#fields)
- [runtime](SalesEnquiryItemHistoryRequest.md#runtime)
- [typeName](SalesEnquiryItemHistoryRequest.md#typename)

### Methods

- [clone](SalesEnquiryItemHistoryRequest.md#clone)
- [equals](SalesEnquiryItemHistoryRequest.md#equals)
- [fromBinary](SalesEnquiryItemHistoryRequest.md#frombinary)
- [fromJson](SalesEnquiryItemHistoryRequest.md#fromjson)
- [fromJsonString](SalesEnquiryItemHistoryRequest.md#fromjsonstring)
- [getType](SalesEnquiryItemHistoryRequest.md#gettype)
- [toBinary](SalesEnquiryItemHistoryRequest.md#tobinary)
- [toJSON](SalesEnquiryItemHistoryRequest.md#tojson)
- [toJson](SalesEnquiryItemHistoryRequest.md#tojson-1)
- [toJsonString](SalesEnquiryItemHistoryRequest.md#tojsonstring)
- [equals](SalesEnquiryItemHistoryRequest.md#equals-1)
- [fromBinary](SalesEnquiryItemHistoryRequest.md#frombinary-1)
- [fromJson](SalesEnquiryItemHistoryRequest.md#fromjson-1)
- [fromJsonString](SalesEnquiryItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiryItemHistoryRequest**(`data?`): [`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md)\> |

#### Returns

[`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md)

#### Overrides

Message\&lt;SalesEnquiryItemHistoryRequest\&gt;.constructor

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1869](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1869)

## Properties

### name

• **name**: `string` = `""`

**`Mandatory`**

**`Description`**

The exact descriptive name of the requested product or service. Because enquiry items are tracked via free-text names instead of strict catalog IDs, this string acts as the secondary identifier for fetching the specific item's historical audit trail.

**`Example`**

```ts
"Industrial Copper Wiring - 12 AWG"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string name = 11;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1867](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1867)

___

### salesEnquiryId

• **salesEnquiryId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target sales enquiry associated with the historical record.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer greater than zero.

**`Generated`**

from field: uint64 sales_enquiry_id = 10;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1851](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1851)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1876](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1876)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1874](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1874)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiryItemHistoryRequest"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1875](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1875)

## Methods

### clone

▸ **clone**(): [`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md) \| `PlainMessage`\<[`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md) \| `PlainMessage`\<[`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md) \| `PlainMessage`\<[`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1893](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1893)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1881](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1881)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1885](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1885)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryItemHistoryRequest`](SalesEnquiryItemHistoryRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1889](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L1889)
