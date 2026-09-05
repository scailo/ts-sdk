[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsResponsesServiceItemUpdateRequest

# Class: QuotationsResponsesServiceItemUpdateRequest

Describes the parameters required to update an item in a quotation response

**`Generated`**

from message Scailo.QuotationsResponsesServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)\>

  ↳ **`QuotationsResponsesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](QuotationsResponsesServiceItemUpdateRequest.md#constructor)

### Properties

- [deliveryTimeInDays](QuotationsResponsesServiceItemUpdateRequest.md#deliverytimeindays)
- [hsnSacCode](QuotationsResponsesServiceItemUpdateRequest.md#hsnsaccode)
- [id](QuotationsResponsesServiceItemUpdateRequest.md#id)
- [internalQuantity](QuotationsResponsesServiceItemUpdateRequest.md#internalquantity)
- [name](QuotationsResponsesServiceItemUpdateRequest.md#name)
- [specifications](QuotationsResponsesServiceItemUpdateRequest.md#specifications)
- [taxGroupId](QuotationsResponsesServiceItemUpdateRequest.md#taxgroupid)
- [uomId](QuotationsResponsesServiceItemUpdateRequest.md#uomid)
- [userComment](QuotationsResponsesServiceItemUpdateRequest.md#usercomment)
- [vaultFolderId](QuotationsResponsesServiceItemUpdateRequest.md#vaultfolderid)
- [vendorQuantity](QuotationsResponsesServiceItemUpdateRequest.md#vendorquantity)
- [vendorUnitPrice](QuotationsResponsesServiceItemUpdateRequest.md#vendorunitprice)
- [vendorUomId](QuotationsResponsesServiceItemUpdateRequest.md#vendoruomid)
- [fields](QuotationsResponsesServiceItemUpdateRequest.md#fields)
- [runtime](QuotationsResponsesServiceItemUpdateRequest.md#runtime)
- [typeName](QuotationsResponsesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](QuotationsResponsesServiceItemUpdateRequest.md#clone)
- [equals](QuotationsResponsesServiceItemUpdateRequest.md#equals)
- [fromBinary](QuotationsResponsesServiceItemUpdateRequest.md#frombinary)
- [fromJson](QuotationsResponsesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](QuotationsResponsesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](QuotationsResponsesServiceItemUpdateRequest.md#gettype)
- [toBinary](QuotationsResponsesServiceItemUpdateRequest.md#tobinary)
- [toJSON](QuotationsResponsesServiceItemUpdateRequest.md#tojson)
- [toJson](QuotationsResponsesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](QuotationsResponsesServiceItemUpdateRequest.md#tojsonstring)
- [equals](QuotationsResponsesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](QuotationsResponsesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](QuotationsResponsesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](QuotationsResponsesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsResponsesServiceItemUpdateRequest**(`data?`): [`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)\> |

#### Returns

[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;QuotationsResponsesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/quotations_responses.scailo_pb.ts:1043](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L1043)

## Properties

### deliveryTimeInDays

• **deliveryTimeInDays**: `bigint` = `protoInt64.zero`

The delivery time in days (in cents)

**`Generated`**

from field: uint64 delivery_time_in_days = 20;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1034](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L1034)

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

Stores the HSN/SAC code of the item

**`Generated`**

from field: string hsn_sac_code = 13;

#### Defined in

[src/quotations_responses.scailo_pb.ts:985](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L985)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/quotations_responses.scailo_pb.ts:955](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L955)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The internal quantity offered (in cents)

**`Generated`**

from field: uint64 internal_quantity = 15;

#### Defined in

[src/quotations_responses.scailo_pb.ts:999](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L999)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 12;

#### Defined in

[src/quotations_responses.scailo_pb.ts:978](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L978)

___

### specifications

• **specifications**: `string` = `""`

The specifications of the item

**`Generated`**

from field: string specifications = 21;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1041](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L1041)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The associated tax group ID

**`Generated`**

from field: uint64 tax_group_id = 19;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1027](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L1027)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The internal unit of material

**`Generated`**

from field: uint64 uom_id = 14;

#### Defined in

[src/quotations_responses.scailo_pb.ts:992](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L992)

___

### userComment

• **userComment**: `string` = `""`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/quotations_responses.scailo_pb.ts:948](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L948)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/quotations_responses.scailo_pb.ts:971](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L971)

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

The quantity offered in vendor's unit of material (in cents)

**`Generated`**

from field: uint64 vendor_quantity = 17;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1013](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L1013)

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price per vendor's unit of material

**`Generated`**

from field: uint64 vendor_unit_price = 18;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1020](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L1020)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

The vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 16;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1006](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L1006)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_responses.scailo_pb.ts:1050](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L1050)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_responses.scailo_pb.ts:1048](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L1048)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsResponsesServiceItemUpdateRequest"``

#### Defined in

[src/quotations_responses.scailo_pb.ts:1049](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L1049)

## Methods

### clone

▸ **clone**(): [`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_responses.scailo_pb.ts:1078](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L1078)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:1066](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L1066)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:1070](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L1070)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemUpdateRequest`](QuotationsResponsesServiceItemUpdateRequest.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:1074](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/quotations_responses.scailo_pb.ts#L1074)
